import type { Metadata } from "next";
import {Inter, Roboto_Mono} from "next/font/google";
import "./globals.css";


const inter = Inter(
  {
    subsets: ["latin"],
    variable: "--font-sans",
  }
);

const robotoMono = Roboto_Mono(
  {
    subsets: ["latin"],
    variable: "--font-serif",
    weight:["400"]
  }
)

export const metadata: Metadata = {
  title: "Hello There!",
  description: "This is my protfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
