import { auth } from '@/auth';
import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import ReactQueryProvider from '@/components/providers/react-query-provider';

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap'
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html
      lang="en"
      className={`${lato.className}`}
      suppressHydrationWarning={true}
    >
      <head>
        <title>Mozza Fotography</title>
        <meta name="title" content="Mozza Fotography" />
        <meta
          name="description"
          content="📸 Mozza Photography – Layanan fotografi profesional di Pekalongan, Jawa Tengah, melayani foto wisuda, pernikahan, pre-wedding, kelas, dan lainnya. Telah dipercaya oleh 1.000+ klien, kami siap mengabadikan momen spesial Anda dengan hasil terbaik! 📷✨

          🔹 Fotografi Wisuda | Pre-Wedding | Pernikahan | Event | Kelas
          🔹 Pekalongan, Jawa Tengah
          🔹 1000+ Klien Puas"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://foto-web.vercel.app/" />
        <meta property="og:title" content="Mozza Fotography" />
        <meta
          property="og:description"
          content="📸 Mozza Photography – Layanan fotografi profesional di Pekalongan, Jawa Tengah, melayani foto wisuda, pernikahan, pre-wedding, kelas, dan lainnya. Telah dipercaya oleh 1.000+ klien, kami siap mengabadikan momen spesial Anda dengan hasil terbaik! 📷✨

        🔹 Fotografi Wisuda | Pre-Wedding | Pernikahan | Event | Kelas
        🔹 Pekalongan, Jawa Tengah
        🔹 1000+ Klien Puas"
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://foto-web.vercel.app/" />
        <meta property="twitter:title" content="Mozza Fotography" />
        <meta
          property="twitter:description"
          content="📸 Mozza Photography – Layanan fotografi profesional di Pekalongan, Jawa Tengah, melayani foto wisuda, pernikahan, pre-wedding, kelas, dan lainnya. Telah dipercaya oleh 1.000+ klien, kami siap mengabadikan momen spesial Anda dengan hasil terbaik! 📷✨

        🔹 Fotografi Wisuda | Pre-Wedding | Pernikahan | Event | Kelas
        🔹 Pekalongan, Jawa Tengah
        🔹 1000+ Klien Puas"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </head>
      <body className={'overflow-auto'}>
        <NextTopLoader showSpinner={false} />
        <Providers session={session}>
          <Toaster />
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </Providers>
      </body>
    </html>
  );
}
