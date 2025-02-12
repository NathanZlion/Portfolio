'use client';

import Dock from "@/components/dock";
import TopNav from "@/components/top-bar";

export default function DesktopLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div
            className="relative h-screen max-h-screen w-full 
            bg-[url(/img/wallpaper.jpg)] bg-cover bg-center bg-no-repeat 
            before:content-[''] before:absolute before:inset-0 before:bg-black/25 
            bg-neutral-900 bg-opacity-50"
        >
            <TopNav />
            <section className="h-full w-full">
                {children}
            </section>
            <Dock />
        </div>
    );
}
