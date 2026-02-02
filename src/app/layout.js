import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";

import RouteLoader from "./components/routeLoader";
import NavBar from "./components/NavBar";
import ClickSpark from "./components/clickSpark";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Emma Jennings Portfolio",
  description:
    "Portfolio Website created by Emma Jennings using Next.js and hosted on Vercel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <ClickSpark sparkSize={20} sparkColor="#3f538d" sparkCount={7}>
          <RouteLoader />
          <NavBar />
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}


