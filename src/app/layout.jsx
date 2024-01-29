import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import StoreProvider from "@/lib/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopper",
  description: "A E-Commerce Application",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
