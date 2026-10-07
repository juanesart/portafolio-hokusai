import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New, Yuji_Syuku } from "next/font/google";
import "./globals.css";

const mincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-mincho",
});
const kaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kaku",
});
const yuji = Yuji_Syuku({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yuji",
});

export const metadata: Metadata = {
  title: "Tu Nombre — Desarrollador",
  description: "Portafolio de desarrollo web inspirado en el ukiyo-e de Hokusai.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${mincho.variable} ${kaku.variable} ${yuji.variable}`}>
      <body className="papel">{children}</body>
    </html>
  );
}
