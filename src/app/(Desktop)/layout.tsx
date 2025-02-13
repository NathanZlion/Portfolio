'use client';

import Dock from "@/components/dock";
import TopNav from "@/components/top-bar";

export default function DesktopLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="relative h-screen max-h-screen w-full bg-primary/30">
            <TopNav />
            <section className="h-full w-full">
                {children}
            </section>
            <Dock />
        </div>
    );
}
