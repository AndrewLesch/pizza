import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";

const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap', 
  variable: "--font-nunito", 
});


export const metadata: Metadata = {
  title: "Pizza | Главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className={nunito.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
