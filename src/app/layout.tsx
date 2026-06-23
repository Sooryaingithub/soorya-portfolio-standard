import MinimalBackground from "@/components/visuals/MinimalBackground";
import Navigation from "@/components/layout/Navigation";
import CommandPalette from "@/components/ui/CommandPalette";
import TerminalEasterEgg from "@/components/ui/TerminalEasterEgg";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://sooryasendilnath.com'),
  title: "Soorya Sendilnath - AI Systems Engineer",
  description: "Portfolio of Soorya Sendilnath. Building privacy-first AI across cloud infrastructure, local intelligence, and spatial computing.",
  openGraph: {
    title: "Soorya Sendilnath - AI Systems Engineer",
    description: "Portfolio of Soorya Sendilnath. Building privacy-first AI across cloud infrastructure, local intelligence, and spatial computing.",
    url: "https://sooryasendilnath.com",
    siteName: "Soorya Sendilnath Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soorya Sendilnath Portfolio Preview",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Soorya Sendilnath - AI Systems Engineer",
    description: "Building privacy-first AI across cloud infrastructure, local intelligence, and spatial computing.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col relative antialiased bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          <MinimalBackground />
          <Navigation />
          <CommandPalette />
          <TerminalEasterEgg />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
