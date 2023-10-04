import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./Header";
import { Providers } from "./store/provider";

const poppins = Poppins({
  weight: ["400", "300", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Renting",
  description: "Rent new fancy car",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#f1f3f4]`}><Providers>
        <Header />
        <main className="relative flex w-full flex-wrap">{children}</main>
        </Providers>

      </body>
    </html>
  );
}
