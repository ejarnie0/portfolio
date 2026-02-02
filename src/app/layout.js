import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RouteLoader from "./components/routeLoader";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";

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
        <RouteLoader />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
