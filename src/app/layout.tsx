import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Layout/Header";
import { ThemeProvider } from "@/components/theme-provider";
import InsightProvider from "./insight-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newz-insight.vercel.app"),
  title: "Newz Insight",
  description:
    "Unveil AI: Summarize news, detect bias, and analyze sentiment with the power of AI.",
  keywords:["News", "AI", "News Analysis", "Sentiment", "Summary"],
  openGraph:{
    title: 'Newz Insight AI',
    description: 'Analyze news sentiment and detect bias with ease!',
    images: ['/social.png'],
  },
  twitter:{
    title: 'Newz Insight AI',
    description: 'Analyze news sentiment and detect bias with ease!',
    images: ['/social.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster theme="dark" richColors />
          <InsightProvider>
            <Header />
            {children}
          </InsightProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
