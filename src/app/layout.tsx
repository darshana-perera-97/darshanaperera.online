import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import CustomCursor from "./components/layout/custom-cursor";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Darshana Perera - UI/UX Designer & Full-Stack Engineer",
  description: "UI/UX Designer & Full-Stack Engineer with 2.5+ years of experience. Specializing in React.js, Next.js, WordPress, Flutter, and mobile app development. View portfolio and get in touch.",
  keywords: "Darshana Perera, UI/UX Designer, Full-Stack Engineer, React.js Developer, Next.js Developer, WordPress Developer, Flutter Developer, Web Developer, Frontend Developer, Portfolio",
  authors: [{ name: "Darshana Perera" }],
  creator: "Darshana Perera",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "Darshana Perera - UI/UX Designer & Full-Stack Engineer",
    description: "UI/UX Designer & Full-Stack Engineer with 2.5+ years of experience. Specializing in React.js, Next.js, WordPress, Flutter, and mobile app development.",
    url: "https://www.darshanaperera.online",
    siteName: "Darshana Perera Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshana Perera - UI/UX Designer & Full-Stack Engineer",
    description: "UI/UX Designer & Full-Stack Engineer specializing in React.js, Next.js, WordPress, and Flutter development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <CustomCursor />
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
