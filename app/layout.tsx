
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "./Components/container";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog site",
  description: "This blogsite is made by loser who is just i can fucked with everything i can i am mother fucking winner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100`}
        >
          <Container>
            <Navbar />
            {children}
            <Footer />
          </Container>
        </body>
      </html>
    </ClerkProvider>
  );
}
