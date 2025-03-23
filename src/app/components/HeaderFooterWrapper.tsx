"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/components/Header/header";
import Footer from "@/app/components/Footer/footer";

export default function HeaderFooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = pathname.startsWith("/auth") || pathname.startsWith("/outils/lifecounter");

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
