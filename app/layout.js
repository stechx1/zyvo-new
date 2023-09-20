import './globals.css';
import { Poppins, Roboto } from 'next/font/google';
import { AOSInit } from '@/AOSInit';
import { ClerkProvider } from '@clerk/nextjs';
import PageLayout from '@/components/Layout';
import FacebookPixel from '@/components/FacebookPixel';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: 'ZYVO | Hourly spaces',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AOSInit />
      <html lang='en'>
        <body className={`${roboto.className} ${poppins.className} `}>
          <PageLayout>{children}</PageLayout>
          <FacebookPixel />
        </body>
      </html>
    </ClerkProvider>
  );
}
