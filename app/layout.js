import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const ToastProvider = dynamic(() => import("./components/helper/ToastProvider"), { ssr: false });
const GoogleTagManager = dynamic(() => import("@next/third-parties/google").then(mod => mod.GoogleTagManager), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Harshil Lakhani - Software Developer",
  description:
    "This is the portfolio of Harshil Lakhani. Passionate about building fast backends and fluid frontends. From scalable APIs in Node.js to Flutter apps in your pocket — I'm now diving into the MERN stack to push the boundaries of full-stack creativity..",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ToastProvider />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}
