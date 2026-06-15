import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gul Mohammad | Full Stack Developer & UI/UX Designer",
  description: "Portfolio of Gul Mohammad, a passionate Full Stack Developer, UI/UX Designer, and Teaching Professional with 3.5+ years of experience building modern web experiences.",
  keywords: ["Gul Mohammad", "Full Stack Developer", "UI/UX Designer", "Web Developer", "React Developer", "Node Developer", "Ghaziabad", "India"],
  authors: [{ name: "Gul Mohammad" }],
  openGraph: {
    title: "Gul Mohammad | Full Stack Developer & UI/UX Designer",
    description: "Building Modern Web Experiences, Scalable Applications & Creative Digital Solutions.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-space-dark text-gray-100 selection-glow">
        {children}
      </body>
    </html>
  );
}
