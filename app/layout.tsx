import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "April Smith | Implementation, Integration & Automation",
  description:
    "Portfolio of April Smith, showcasing implementation, integration, workflow automation, and technical project work.",

  openGraph: {
    title: "April Smith | Implementation, Integration & Automation",
    description:
      "Implementation, integration, workflow automation, and technical project work.",
    type: "website",
    siteName: "April Smith Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "April Smith | Implementation, Integration & Automation",
    description:
      "Implementation, integration, workflow automation, and technical project work.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
