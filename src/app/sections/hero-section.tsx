"use client"

import { cn } from "@/lib/utils";
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beam-with-collision";


export const HeroSection = ({ className }: { className?: string }) => {
    return (
        <BackgroundBeamsWithCollision
            className="bg-transparent h-[88vh] w-full border-b-2 border-gray-400 overflow-x-clip overflow-y-hidden"
            key={"hero-section"}
        >
            <section
                className={cn(
                    "relative flex flex-col items-center justify-center h-full w-full",
                    className
                )}
            >
                <div className="relative z-10 text-center flex flex-col gap-5">
                    <h1 className="text-2xl md:text-8xl font-bold font-dotGothic">
                        Nathnael Dereje
                    </h1>
                    <p className="mt-3 text-lg sm:text-xl font-medium">
                        Software Engineer, Full Stack Developer, Mobile App Developer
                    </p>
                </div>

                {/* scroll down */}
                <div className="absolute bottom-4 right-0">
                    <DotLottieReact
                        src="https://lottie.host/82628605-0013-4c3b-895f-eeb91856e7b4/vUS0Q1IfjL.json"
                        className="dark:invert"
                        loop
                        autoplay
                    />
                </div>

            </section>
        </BackgroundBeamsWithCollision>
    );
};
