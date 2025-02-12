'use client';

import Dock from "@/components/dock";

export default function DesktopLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="min-h-screen relative w-full">
            {children}
            <Dock />
        </div>
    );
}
