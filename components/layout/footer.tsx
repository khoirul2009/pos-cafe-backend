'use client';
import {
  CameraIcon,
  InstagramIcon,
  FacebookIcon,
  XIcon,
  MapPinIcon,
  MailIcon,
  PhoneIcon
} from 'lucide-react';
import { Separator } from '../ui/separator';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Service } from '@/prisma/generated/client';
import { toast } from 'sonner';
import Link from 'next/link';

export default function Footer() {
  const [service, setService] = useState<Service[]>([]);
  useEffect(() => {
    fetchService();
  }, []);

  const fetchService = async () => {
    try {
      const response = await axios.get(`/api/service`);
      setService(response.data.data);
    } catch (error) {
      toast.error('Error fetch service');
    }
  };
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <CameraIcon className="h-6 w-6" />
              <span className="text-lg font-bold">Capture Studio</span>
            </div>
            <p className="mb-4 text-muted-foreground">
              Professional photography services capturing life's beautiful
              moments.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2">
              {service.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/service/${item.id}`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Informasi Kontak</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPinIcon className="mr-2 mt-0.5 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  . Tj. 3A, Tj. Lor, Tanjung, Kec. Tirto, Kabupaten Pekalongan,
                  Jawa Tengah 51151
                </span>
              </li>
              <li className="flex items-start">
                <MailIcon className="mr-2 mt-0.5 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  saugy119471@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="mr-2 mt-0.5 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">0857-0003-1014</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 text-sm text-muted-foreground md:mb-0">
            © 2025 Capture Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
