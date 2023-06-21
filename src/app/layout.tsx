import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayoub Jouda - ",
  description: "Ayoub Jouda's Personal Website",
  icons: {
    icon: { url: "/servicesfirst.svg", type: "image/svg+xml" },
  },
  openGraph: {
    title: 'Ayoub Jouda -',
    description: "Ayoub Jouda's Personal Website",
    images: '/portfolio.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1000px] h-[54px] mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
