import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import HeaderFooterWrapper from "@/app/components/HeaderFooterWrapper";
import { AuthProvider } from "./context/AuthContext";
import OfflineBanner from "./components/OfflineBanner"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gathering Portal",
  description: "Une Progressive Web App avec Next.js",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <OfflineBanner />
          <HeaderFooterWrapper>
            {children}
          </HeaderFooterWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
