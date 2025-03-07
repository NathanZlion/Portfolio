"use client"

import { Button } from "@/components/ui/button";
import { IconHome } from "@tabler/icons-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



export default function NotFound() {
    return (
        <div className="h-screen w-screen flex flex-col gap-5 items-center justify-center">
            <div className="container h-96 w-auto">
                <DotLottieReact
                    src="https://lottie.host/b3a6a87f-bbc4-4a23-8d0c-dd9bf856d7cd/X2yBieCJoS.lottie"
                    speed={.3}
                    loop
                    autoplay
                />
            </div>

            <Button
                variant={"outline"}
                className="shadow-lg"
                onClick={() => window.location.replace("/")}
            >
                <IconHome />
                Back to home
            </Button>
        </div>
    )
}