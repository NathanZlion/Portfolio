import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "./storeProvider";

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

const sanfransiscoPro = localFont({
  src: [
    {
      path: "./fonts/sf-pro/sf-pro-bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/sf-pro/sf-pro-regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/sf-pro/sf-pro-medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/sf-pro/sf-pro-ultra-light-italic.otf",
      weight: "100",
      style: "italic",
    }
  ],
  variable: "--font-sanfransisco",
})

export const metadata: Metadata = {
  title: "Nathnael Dereje",
  description: "Macos inspired portfolio website of Nathnael Dereje, I am a software engineer based in Addis Ababa, Ethiopia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sanfransiscoPro.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background`} >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            {children}
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
