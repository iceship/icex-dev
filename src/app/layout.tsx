import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://icex.dev"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "icex.dev",
    template: "%s | icex.dev",
  },
  description: "developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} tracking-tight antialiased`}
        >
          <div className="flex min-h-screen flex-col justify-between bg-white p-8 pt-0 text-gray-900 md:pt-8">
            <main className="mx-auto w-full max-w-[60ch] space-y-6">
              {children}
            </main>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [{ name: "github", url: "https://github.com/iceship" }];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-blue-500"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
