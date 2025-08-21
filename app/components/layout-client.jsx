'use client';

import { GoogleTagManager } from "@next/third-parties/google";
import dynamic from "next/dynamic";

import Footer from "./footer";
import ScrollToTop from "./helper/scroll-to-top";
import Navbar from "./navbar";
import ChatWidget from "./chatbot/ChatWidget";

const ToastProvider = dynamic(() => import("./helper/ToastProvider"), { ssr: false });

export default function ClientLayout({ children }) {
  return (
    <>
      <ToastProvider />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        {children}
        <ScrollToTop />
      </main>
      <Footer />
      <ChatWidget />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </>
  );
} 