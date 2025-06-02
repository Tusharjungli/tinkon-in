// /app/layout.tsx
import "./globals.css";
import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Tink On It",
  description: "Tushar's premium Gen Z blog — stories on life, dogs, tech, growth, and more.",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://tinkon.in"),
  openGraph: {
    title: "Tink On It",
    description: "Raw, real, and premium stories about life, dogs, tech, and more.",
    url: "https://tinkon.in",
    siteName: "Tink On It",
    images: [
      {
        url: "/images/tinkon logo.png", // Add this image to /public/images/ (1200x630px, JPG/PNG)
        width: 1200,
        height: 630,
        alt: "Tink On It by Tushar Panchal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tink On It",
    description: "Raw, real, and premium stories by Tushar Panchal.",
    images: ["/images/og-image.jpg"],
    site: "@yourtwitter", // your X/Twitter handle, if you want
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-neutral-900 min-h-screen flex flex-col font-sans">
        <header className="w-full border-b bg-white sticky top-0 z-10">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              Tink<span className="font-black text-black">On</span>It
            </Link>

            <div className="flex gap-6 text-sm font-medium">
              <Link href="/blog" className="hover:underline">Blog</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-8 text-center text-xs text-gray-500 bg-white">
          &copy; {new Date().getFullYear()} Tushar Panchal — Made with 💡 for thinkers and introverts.
        </footer>
      </body>
    </html>
  );
}
