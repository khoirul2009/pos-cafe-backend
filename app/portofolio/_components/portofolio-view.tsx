'use client';
import { useEffect, useState } from 'react';
import HomeLayout from '@/components/layout/home-layout';
import { Camera } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

interface Photo {
  id: number;
  image: string;
  title: string;
}

export default function PortfolioView() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    fetchPhotos(1);
  }, []);

  const fetchPhotos = async (pageNumber: number) => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/gallery?page=${pageNumber}&pageSize=6`);
      if (res.data.data.length > 0) {
        setPhotos((prev) => [...prev, ...res.data.data]);
        setPage(pageNumber);
      } else {
        setHasMore(false); // Tidak ada lagi data untuk dimuat
      }
    } catch (error) {
      toast.error('Error fetching gallery');
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomeLayout>
      <div className="min-h-[80vh] bg-gray-50 px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Photography Portfolio
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Capturing moments, emotions, and stories through the lens
            </p>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {loading && photos.length === 0
              ? // Skeleton ketika loading awal
                Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-[400px] w-full rounded-lg"
                  />
                ))
              : photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
                    onMouseEnter={() => setHoveredId(photo.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="h-[400px] w-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                        hoveredId === photo.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="mb-2 text-xl font-semibold">
                          {photo.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {/* Load More Button */}
          <div className="mt-10 flex justify-center">
            {hasMore ? (
              <Button onClick={() => fetchPhotos(page + 1)} disabled={loading}>
                {loading ? 'Loading...' : 'Load More'}
              </Button>
            ) : (
              <p className="text-gray-500">No more photos</p>
            )}
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center space-x-2 text-gray-600">
              <Camera className="h-6 w-6" />
              <span className="text-lg font-medium">
                All images shot with professional equipment
              </span>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
