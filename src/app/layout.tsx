import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/ui/mode_toggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const dotGothic16 = localFont(
  {
    src: "./fonts/DotGothic16-Regular.ttf",
    variable: "--font-dot-gothic",
    weight: "400",
  }
)

const AzeretMono = localFont(
  {
    src: [
      {
        path: "./fonts/azeret_mono/AzeretMono-Regular.ttf",
        weight: "400"
      },
      {
        path: "./fonts/azeret_mono/AzeretMono-Bold.ttf",
        weight: "700"
      }
    ],
    variable: "--font-azeret-mono",
  }
)

export const metadata: Metadata = {
  title: "Nathnael Dereje Portfolio",
  description: "Nathnael Dereje Portfolio Website",
  keywords: ["Software Engineer"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${AzeretMono.variable} ${dotGothic16.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Nav logo goes here */}

          {/*  */}
          <ModeToggle
            orientation={"vertical"}
            className="fixed top-1/2 border right-0"
          />

          {children}

          {/* sidebar goes here */}

        </ThemeProvider>
      </body>
    </html>
  );
}
