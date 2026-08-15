import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import { CustomCursor } from "@/src/components/CustomCursor";
import "./globals.css";

const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });
const display = Archivo_Black({ variable: "--font-display", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Aaron Chao — I build what's missing",
  description:
    "Fliqpop, WaveFM, PTVon, Backliner, LyricsOn, youtubify — six things that didn't exist until they were built.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
