import "../styles/globals.css";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Professional Window Cleaning | Real Clean",
  description:
    "Professional residential and commercial window cleaning. Fast quotes, crystal clear results, and affordable pricing.",
  keywords: [
    "window cleaning",
    "residential window cleaning",
    "commercial window cleaning",
    "window washers near me",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-slate-900 text-white font-inter">{children}</body>
    </html>
  );
}
