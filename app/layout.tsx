import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mae Nam Khong | Authentic Thai Restaurant Auckland",
  description:
    "Auckland's award-winning Thai restaurant group. Authentic Thai cuisine across 7 locations — New Lynn, Titirangi, Herne Bay, St Johns, Te Awamutu and more. Dine in, takeaway or catering.",
  keywords:
    "Thai restaurant Auckland, authentic Thai food, Mae Nam Khong, New Lynn, Titirangi, Herne Bay, St Johns, Te Awamutu, Thai catering Auckland, Thai takeaway, Iconic Eats Award, BYO restaurant Auckland",
  metadataBase: new URL("https://maenamkhong.co.nz"),
  openGraph: {
    title: "Mae Nam Khong | Authentic Thai Restaurant Auckland",
    description:
      "Award-winning authentic Thai cuisine across 7 Auckland locations. Dine in, takeaway or catering.",
    type: "website",
    locale: "en_NZ",
    siteName: "Mae Nam Khong Thai Restaurant",
    images: [
      {
        url: "/images/SOCIAL%20SIZE-157.jpg",
        width: 1200,
        height: 630,
        alt: "Mae Nam Khong — Authentic Thai Restaurant Auckland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mae Nam Khong | Authentic Thai Restaurant Auckland",
    description:
      "Award-winning authentic Thai cuisine across 7 Auckland locations.",
    images: ["/images/SOCIAL%20SIZE-157.jpg"],
  },
  icons: {
    icon: "/images/logo2.png.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen bg-cream">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}


