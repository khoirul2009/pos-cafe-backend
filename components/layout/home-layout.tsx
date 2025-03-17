import {
  CameraIcon,
  GridIcon,
  HomeIcon,
  ImageIcon,
  MessageSquareIcon,
  UserIcon
} from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import Footer from './footer';
import Link from 'next/link';
import HomeHeader from './home-header';

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-auto bg-background">
      {/* Navigation */}
      <HomeHeader />

      {children}

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background md:hidden">
        <div className="flex h-16 items-center justify-around">
          <Link
            href="/"
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <HomeIcon className="h-6 w-6" />
            <span className="mt-1 text-xs">Home</span>
          </Link>
          <Link
            href="/#service"
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <GridIcon className="h-6 w-6" />
            <span className="mt-1 text-xs">Services</span>
          </Link>
          <Link
            href="/portofolio"
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <ImageIcon className="h-6 w-6" />
            <span className="mt-1 text-xs">Portfolio</span>
          </Link>
          <Link
            href="/#contact"
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <MessageSquareIcon className="h-6 w-6" />
            <span className="mt-1 text-xs">Contact</span>
          </Link>
          <Link
            href="/profile"
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <UserIcon className="h-6 w-6" />
            <span className="mt-1 text-xs">Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
