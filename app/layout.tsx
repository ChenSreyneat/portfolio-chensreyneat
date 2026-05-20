import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chen Sreyneat | Portfolio",
  description: "Personal portfolio of Chen Sreyneat, showcasing projects and skills.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className="relative min-h-screen">
        <Navbar />
        <div className="pt-[80px] min-h-[calc(100vh-160px)] max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
