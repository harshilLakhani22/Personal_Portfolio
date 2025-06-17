import { Inter } from "next/font/google";
import "./css/card.scss";
import "./css/globals.scss";
import ClientLayout from "./components/layout-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Portfolio - Software Developer",
  description:
    "This is a personal portfolio showcasing a software developer's projects and skills. Passionate about building fast backends and fluid frontends. From scalable APIs in Node.js to Flutter apps in your pocket — diving into the MERN stack to push the boundaries of full-stack creativity.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
