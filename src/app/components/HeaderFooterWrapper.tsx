"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/components/Header/header";
import Footer from "@/app/components/Footer/footer";
import { useEffect } from "react";
import { registerServiceWorker } from "@/app/lib/registerServiceWorker";

export default function HeaderFooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    registerServiceWorker();
  }, []);
  const pathname = usePathname();
  const hideLayout = pathname.startsWith("/tools/lifecounter");

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
