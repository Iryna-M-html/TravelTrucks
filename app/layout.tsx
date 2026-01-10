import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
// import AuthProvider from "@/components/AuthProvider/AuthProvider";
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTrucks — Find your perfect camper for adventure",
  description:
    "TravelTrucks is a simple and fast way to find, filter and book campers and motorhomes for your next trip.",
  openGraph: {
    title: "TravelTrucks — Find your perfect camper for adventure",
    description:
      "TravelTrucks is a simple and fast way to find, filter and book campers and motorhomes for your next trip.",
    url: "https://travel-trucks.example.com",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        height: 630,
        alt: "TravelTrucks preview",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "TravelTrucks",
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelTrucks — Find your perfect camper for adventure",
    description:
      "TravelTrucks is a simple and fast way to find, filter and book campers and motorhomes for your next trip.",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {modal}
          </main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
