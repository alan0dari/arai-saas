import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ARAI SaaS - Integración de IA para Empresas",
  description: "Plataforma B2B para integración de IA con automatización (n8n) y comunicación (WhatsApp)",
  keywords: ["IA", "SaaS", "B2B", "n8n", "WhatsApp", "automatización"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
