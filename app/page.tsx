import HomeLayout from '@/components/layout/home-layout';
import PageContainer from '@/components/layout/page-container';
import Reviews from '@/components/reviews';
import ServiceCard from '@/components/service-card';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Service } from '@/prisma/generated/client';
import { ServiceType } from '@/types';
import axios from 'axios';
import { error } from 'console';
import {
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  FacebookIcon,
  AwardIcon,
  StarIcon,
  UsersIcon
} from 'lucide-react';
import Link from 'next/link';

async function App() {
  const appUrl = process.env.NEXTAUTH_URL;
  const response = await axios.get(appUrl + '/api/service?pageSize=6&page=1');

  return (
    <HomeLayout>
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        <div className="container relative z-20 mx-auto flex h-full items-center px-4">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Capturing Life's Beautiful Moments
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Professional photography services for weddings, portraits, events,
              and commercial projects.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our passion for photography combined with years of experience
              makes us the perfect choice for your special moments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-background p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <UsersIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                1000+ Clients Reviewed
              </h3>
              <p className="text-muted-foreground">
                Trusted by thousands of satisfied clients who have shared their
                experiences.
              </p>
            </div>

            <div className="rounded-lg bg-background p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <StarIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">
                Using top-of-the-line equipment to deliver stunning
                high-resolution images.
              </p>
            </div>

            <div className="rounded-lg bg-background p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <UsersIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Client Focused</h3>
              <p className="text-muted-foreground">
                Personalized approach to understand and fulfill your unique
                vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive photography services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {response.data.data.map((service: ServiceType) => (
              <ServiceCard service={service} key={service.id} />
            ))}
          </div>

          <div className="mt-10 items-center text-center">
            <Button className="mx-auto">
              <Link className="w-full" href="/service">
                See More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Reviews />

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
              <p className="mb-8 text-muted-foreground">
                Ready to capture your special moments? Contact us today to
                discuss your photography needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-primary/10 p-3">
                    <MapPinIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Studio Location</h3>
                    <p className="text-muted-foreground">
                      Jl. Tj. 3A, Tj. Lor, Tanjung, Kec. Tirto, Kabupaten
                      Pekalongan, Jawa Tengah 51151
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-primary/10 p-3">
                    <MailIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-muted-foreground">
                      saugy119471@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-primary/10 p-3">
                    <PhoneIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-muted-foreground">0857-0003-1014</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 font-medium">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/mozzafotografi?igsh=aG16NHc5emhuYWEx"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-muted/80"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}

export default App;
