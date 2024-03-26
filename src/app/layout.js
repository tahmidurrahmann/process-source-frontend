import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar/Navbar";
import Head from "next/head";
import Footer from "@/shared/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Process Source",
  description: "Process Source Home Page",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        {/* Your metadata goes here */}
        <title>Your Title</title>
        <meta name="description" content="Your description" />
        {/* Other metadata */}
      </Head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
