import type { Metadata } from "next";
import { Manrope, Source_Serif_4, DotGothic16, Archivo, Archivo_Narrow } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "600", "700"],
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif-4",
  weight: ["600"],
  display: "swap",
});

const dotGothic16 = DotGothic16({
  subsets: ["latin"],
  variable: "--font-dot-gothic-16",
  weight: ["400"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "800"],
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pooja R. Sonar - Software Developer Portfolio",
  description: "Pooja R. Sonar's professional portfolio showcasing her expertise in full-stack development, real-time systems, and MERN stack solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceSerif4.variable} ${dotGothic16.variable} ${archivo.variable} ${archivoNarrow.variable}`}>
      <body>{children}</body>
    </html>
  );
}