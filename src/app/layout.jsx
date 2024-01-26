import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopper",
  description: "A E-Commerce Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className="min-h-screen">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
