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

type Gallery = {
  id: number;
  title: string;
  image: string;
};

const fetchGallerys = async ({ page }: { page: number }) => {
  const res = await axios.get(`/api/gallery?page=${page}`);
  return res.data ?? [];
};

export default function GalleryTable() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialPage = Number(searchParams.get('page')) || 1;
  const [page, setPage] = React.useState(initialPage);
  const [deleteId, setDeleteId] = React.useState<number | null>(null);
  const { toast, ToastComponent } = useToast();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['galleries', page],
    queryFn: () => fetchGallerys({ page })
  });

  // Sync page state with URL
  useEffect(() => {
    router.push(`?page=${page}`);
  }, [page, router]);

  async function handleDelete(event: MouseEvent<HTMLButtonElement>) {
    try {
      const response = await axios.delete(`/api/gallery/${deleteId}`);
      if (response.status === 200) {
        setDeleteId(null);
        refetch();
        toast({
          title: 'Success',
          description: 'Gallery berhasil dihapus!',
          variant: 'success'
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Gagal menghapus Gallery.',
        variant: 'error'
      });
    }
  }

  const columns: ColumnDef<Gallery>[] = [
    {
      accessorKey: 'id',
      header: 'ID'
    },
    {
      accessorKey: 'title',
      header: 'Title'
    },
    {
      accessorKey: 'image',
      header: 'Image',
      cell: ({ row }) => (
        <img
          src={row.original.image}
          alt={row.original.title}
          className="h-16 w-16 rounded object-cover"
        />
      )
    },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <Button variant="secondary" size="sm">
            <Link
              href={`/dashboard/gallery/${row.original.id}/edit`}
              className="w-full"
            >
              Edit
            </Link>
          </Button>
          <Button
            onClick={() => {
              setDeleteId(row.original.id);
            }}
            variant="destructive"
            size="sm"
          >
            Delete
          </Button>
        </div>
      )
    }
  ];

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
