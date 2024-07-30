import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Braganza_Boxing_Camp",
  description: "Generated by @ElHombreDeLaNoche",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="">
          <Header />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
