'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { CameraIcon, LogOutIcon, UserIcon, CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function HomeHeader() {
  const { data: session } = useSession();
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <CameraIcon className="h-8 w-8" />
          <span className="text-xl font-bold">Mozza Fotography</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/portofolio"
            className="text-sm font-medium hover:text-primary"
          >
            Portofolio
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </div>

        {/* Authentication */}
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {session.user?.name || 'Profile'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/profile" className="flex items-center">
                  <UserIcon className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/booking" className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Booking
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => signOut()}
                className="flex cursor-pointer items-center"
              >
                <LogOutIcon className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button>
            <Link href="/login" className="w-full">
              Login / Register
            </Link>
          </Button>
        )}
      </nav>
    </header>
  );
}
