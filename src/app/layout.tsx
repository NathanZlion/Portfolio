import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Nathnael Dereje",
  description: "Nathnael Dereje Portfolio Website",
  keywords: ["Software Engineer"]
};


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${AzeretMono.variable} ${dotGothic16.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
