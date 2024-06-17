import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { HomeParticles } from "@/components/react-particles";
import Footer from "../components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sangwas",

  description:
    "Sangwas is a software development company that provides software design and development services, project discovery, and third-party integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeParticles />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="max-w-screen-xl mx-auto p-4 min-h-screen z-[9]">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
