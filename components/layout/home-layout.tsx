import { Separator } from '@radix-ui/react-separator';
import {
  CameraIcon,
  FacebookIcon,
  GridIcon,
  HomeIcon,
  ImageIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  PhoneIcon,
  UserIcon,
  XIcon
} from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-auto bg-background">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CameraIcon className="h-8 w-8" />
            <span className="text-xl font-bold">Mozza Fotography</span>
          </div>
          <div className="hidden items-center space-x-8 md:flex">
            <a href="/#" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a
              href="/#services"
              className="text-sm font-medium hover:text-primary"
            >
              Services
            </a>
            <a
              href="/#portfolio"
              className="text-sm font-medium hover:text-primary"
            >
              Portfolio
            </a>
            <a
              href="/#about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </a>
          </div>
          <Button>Book Now</Button>
        </nav>
      </header>

      {children}

      {/* Footer */}
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
                moments since 2010.
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
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Wedding Photography
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Portrait Photography
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Commercial Photography
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Event Photography
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Landscape Photography
                  </a>
                </li>
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
              <h3 className="mb-4 font-semibold">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPinIcon className="mr-2 mt-0.5 h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    123 Photography Lane, Artville, CA 90210
                  </span>
                </li>
                <li className="flex items-start">
                  <MailIcon className="mr-2 mt-0.5 h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    info@capturestudio.com
                  </span>
                </li>
                <li className="flex items-start">
                  <PhoneIcon className="mr-2 mt-0.5 h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">(555) 123-4567</span>
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

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background md:hidden">
        <div className="flex h-16 items-center justify-around">
          <a
            href="#"
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <HomeIcon className="h-6 w-6" />
            <span className="mt-1 text-xs">Home</span>
          </a>
          <a
            href="#services"
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <GridIcon className="h-6 w-6" />
            <span className="mt-1 text-xs">Services</span>
          </a>
          <a
            href="#portfolio"
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <ImageIcon className="h-6 w-6" />
            <span className="mt-1 text-xs">Portfolio</span>
          </a>
          <a
            href="#contact"
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <MessageSquareIcon className="h-6 w-6" />
            <span className="mt-1 text-xs">Contact</span>
          </a>
          <a
            href="#about"
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <UserIcon className="h-6 w-6" />
            <span className="mt-1 text-xs">About</span>
          </a>
        </div>
      </div>
    </div>
  );
}
