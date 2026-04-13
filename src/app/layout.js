import { Poppins, DM_Serif_Text } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
});

const dmSerif = DM_Serif_Text({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif'
});


export const metadata = {
  title: "Captive Verde",
  description:
    "Captiva Verde is a publicly traded company (Canadian Security Exchange - Symbol PWR, OTC: CPIVF)",
  openGraph: {
    title: "Captive Verde",
    description:
      "Captiva Verde is a publicly traded company (Canadian Security Exchange - Symbol PWR, OTC: CPIVF)",
    images: ["/meta-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
