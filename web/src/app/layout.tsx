import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PresentationVideo from "@/components/ui/PresentationVideo";

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
        <section>
          <Header />
          <PresentationVideo />
          <main className="md:max-w-5xl mx-auto">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
