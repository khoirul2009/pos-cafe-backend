import PageContainer from '@/components/layout/page-container';
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
import {
  CameraIcon,
  ImageIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  FacebookIcon,
  HeartIcon,
  AwardIcon,
  StarIcon,
  UsersIcon,
  HomeIcon,
  GridIcon,
  MessageSquareIcon,
  UserIcon
} from 'lucide-react';

function App() {
  return (
    // <PageContainer>
    <div className="min-h-screen overflow-auto bg-background">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CameraIcon className="h-8 w-8" />
            <span className="text-xl font-bold">Capture Studio</span>
          </div>
          <div className="hidden items-center space-x-8 md:flex">
            <a href="#" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium hover:text-primary"
            >
              Portfolio
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </a>
          </div>
          <Button>Book Now</Button>
        </nav>
      </header>

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
                <AwardIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Award Winning</h3>
              <p className="text-muted-foreground">
                Recognized for excellence in photography with multiple industry
                awards.
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
            <Card>
              <CardHeader>
                <CardTitle>Wedding Photography</CardTitle>
                <CardDescription>
                  Capturing your special day with elegance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 aspect-video overflow-hidden rounded-md">
                  <img
                    src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Wedding Photography"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive wedding packages including engagement sessions,
                  full-day coverage, and premium photo albums.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Portrait Photography</CardTitle>
                <CardDescription>
                  Professional portraits that tell your story
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 aspect-video overflow-hidden rounded-md">
                  <img
                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                    alt="Portrait Photography"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Individual and family portraits in studio or at locations of
                  your choice, with professional editing and printing options.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Commercial Photography</CardTitle>
                <CardDescription>
                  Elevate your brand with professional imagery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 aspect-video overflow-hidden rounded-md">
                  <img
                    src="https://images.unsplash.com/photo-1664575198308-3959904fa430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Commercial Photography"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Product photography, corporate headshots, and marketing
                  materials to showcase your business in the best light.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Event Photography</CardTitle>
                <CardDescription>
                  Document your special occasions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 aspect-video overflow-hidden rounded-md">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    alt="Event Photography"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Coverage for corporate events, parties, galas, and
                  celebrations with quick turnaround and online galleries.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Landscape Photography</CardTitle>
                <CardDescription>
                  Fine art prints of breathtaking scenery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 aspect-video overflow-hidden rounded-md">
                  <img
                    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Landscape Photography"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Stunning landscape photography available as prints, canvases,
                  and digital downloads for your home or office.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Photo Retouching</CardTitle>
                <CardDescription>Professional editing services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 aspect-video overflow-hidden rounded-md">
                  <img
                    src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Photo Retouching"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Expert photo editing and retouching to enhance your existing
                  photos with color correction and blemish removal.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Hear from people who have experienced our services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mb-6 italic">
                  "The photos from our wedding day were absolutely stunning.
                  They captured every special moment and emotion. We couldn't be
                  happier!"
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="Client"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      Wedding Client
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mb-6 italic">
                  "The commercial photos for our product line exceeded our
                  expectations. They've significantly improved our marketing
                  materials."
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="Client"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">
                      Business Owner
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mb-6 italic">
                  "Our family portraits are treasures we'll cherish forever. The
                  photographer made everyone feel comfortable and captured our
                  personalities perfectly."
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                      alt="Client"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">
                      Portrait Client
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                      123 Photography Lane, Artville, CA 90210
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
                      info@capturestudio.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-primary/10 p-3">
                    <PhoneIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 font-medium">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-muted/80"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-muted/80"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-muted/80"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-muted/30 p-8">
              <h3 className="mb-6 text-xl font-semibold">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border border-input px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-input px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-md border border-input px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-input px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
                  <TwitterIcon className="h-5 w-5" />
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
    // </PageContainer>
  );
}

export default App;
