import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

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
  title: "Theraptly",
  description: "Theraptly is a platform for AI compliance analysis",
  keywords: ["ai", "compliance", "healthcare", "documents", "analysis"],
  metadataBase: new URL("https://theraptly.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${manrope.variable}`}
    >
      <link rel="icon" href="/images/icon.png" type="image/png" sizes="55x54" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1440px] m-auto h-full`}
        suppressHydrationWarning={true}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
