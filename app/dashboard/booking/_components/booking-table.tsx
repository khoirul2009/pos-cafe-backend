'use client';

import React, { MouseEvent, useEffect } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

import { useToast } from '@/components/ui/use-toast';
import Paginations from '@/components/common/paginations';
import { useSearchParams, useRouter } from 'next/navigation';
import DeleteDialog from '@/components/common/delete-dialog';
import { Booking } from '@/prisma/generated/client';
import { Check, Eye, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const fetchBookings = async ({ page }: { page: number }) => {
  const res = await axios.get(`/api/booking?page=${page}`);
  return res.data ?? [];
};

export default function BookingTable() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialPage = Number(searchParams.get('page')) || 1;
  const [page, setPage] = React.useState(initialPage);
  const [deleteId, setDeleteId] = React.useState<number | null>(null);
  const { toast, ToastComponent } = useToast();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['galleries', page],
    queryFn: () => fetchBookings({ page })
  });

  // Sync page state with URL
  useEffect(() => {
    router.push(`?page=${page}`);
  }, [page, router]);

  async function handleDelete(event: MouseEvent<HTMLButtonElement>) {
    try {
      const response = await axios.delete(`/api/booking/${deleteId}`);
      if (response.status === 200) {
        setDeleteId(null);
        refetch();
        toast({
          title: 'Success',
          description: 'Booking berhasil dihapus!',
          variant: 'success'
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Gagal menghapus Booking.',
        variant: 'error'
      });
    }
  }

  // Helper function to get appropriate badge color based on status
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'cancel':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const columns: ColumnDef<Booking>[] = [
    {
      accessorKey: 'id',
      header: 'ID'
    },
    {
      accessorKey: 'user.name',
      header: 'Customer Name'
    },
    {
      accessorKey: 'service.title',
      header: 'Service'
    },
    {
      accessorKey: 'location',
      header: 'Location'
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <Badge
          className={`px-3 py-1 text-sm font-medium ${getStatusColor(
            row.original.status
          )}`}
        >
          {row.original.status}
        </Badge>
      )
    },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <Button variant="default" size="sm">
            <Link
              href={`/dashboard/booking/${row.original.id}`}
              className="flex w-full items-center gap-2 text-white"
            >
              <Eye /> Detail
            </Link>
          </Button>
          {row.original.status === 'confirmed' && (
            <>
              <Button
                variant="destructive"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => handleCancel(row.original.id)}
              >
                <X /> Cancel
              </Button>
              <Button
                variant="success"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => handleComplete(row.original.id)}
              >
                <Check /> Completed
              </Button>
            </>
          )}
        </div>
      )
    }
  ];

  const handleCancel = async (id: number) => {
    try {
      const response = await axios.put(`/api/booking/${id}`, {
        status: 'cancel'
      });
      if (response.status === 200) {
        refetch();
        toast({
          title: 'Success',
          description: 'Booking berhasil dibatalkan!',
          variant: 'success'
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Gagal membatalkan Booking.',
        variant: 'error'
      });
    }
  };

  const handleComplete = async (id: number) => {
    try {
      const response = await axios.put(`/api/booking/${id}`, {
        status: 'completed'
      });
      if (response.status === 200) {
        refetch();
        toast({
          title: 'Success',
          description: 'Booking berhasil diselesaikan!',
          variant: 'success'
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Gagal menyelesaikan Booking.',
        variant: 'error'
      });
    }
  };

  const table = useReactTable({
    data: data?.data || [],
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  if (isLoading) {
    return (
      <div>
        <Skeleton className="mb-2 h-10 w-full" />
        <Skeleton className="mb-2 h-10 w-full" />
        <Skeleton className="mb-2 h-10 w-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500">
        Error loading data. <Button onClick={() => refetch()}>Retry</Button>
      </div>
    );
  }

  return (
    <div className="">
      <DeleteDialog
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        confirmDelete={handleDelete}
      />
      <Table className="rounded-lg">
        <TableHeader className="bg-secondary">
          <TableRow>
            {table.getHeaderGroups().map((headerGroup) => (
              <React.Fragment key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </React.Fragment>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                No data available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Paginations
        currentPage={page}
        totalPages={data?.pagination?.totalPages ?? 1}
        onPageChange={setPage}
      />

      {ToastComponent}
    </div>
  );
}
