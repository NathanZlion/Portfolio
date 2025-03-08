"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
    IconBrandTelegram,
    IconCopy,
    IconMail,
    IconCheck,
    IconBrandGithub,
    IconBrandLinkedin,
    IconNotebook,
    IconHeart,
    IconBrandLeetcode,
    IconBrandUpwork,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { IconCodeforce, IconMediumNew } from "@/components/icons/index"


export const FooterSection = () => {
    const [copied, setCopied] = useState(false);
    const [hoveredCopy, setHoveredCopy] = useState(false);

    const EMAIL = "nathandere1357@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };


    const socials: { name: string, link: string, icon: JSX.Element }[] = [
        {
            icon: <IconBrandUpwork size={30} />,
            name: "Upwork Profile",
            link: "https://www.upwork.com/freelancers/~01667ab0c0d46185d5?viewMode=1",
        },
        {
            icon: <IconBrandLinkedin size={30} />,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/nathnael-dereje/",
        },
        {
            icon: <IconBrandGithub size={30} />,
            name: "GitHub",
            link: "https://github.com/NathanZlion/",
        },
        // {
        //     icon: <IconBrandTelegram size={30} />,
        //     name: "Telegram",
        //     link: "https://t.me/NathanZGreat",
        // },
        {
            icon: <IconMediumNew />,
            name: "Medium",
            link: "https://nathanzlion.medium.com/",
        },
        {
            icon: <IconNotebook size={30} />,
            name: "Blog",
            link: "https://nathanzlion.github.io/",
        },
        {
            icon: <IconBrandLeetcode size={30} />,
            name: "Leetcode",
            link: "https://leetcode.com/Nathan_Zlion/",
        },
        {
            icon: <IconCodeforce />,
            name: "Codeforces",
            link: "https://codeforces.com/profile/Nathan_D",
        }
    ];

    return (
        <div className="flex flex-col gap-2 mb-14 md:m-0 ">
            <footer className="h-fit w-full p-3 bg-card/90 invert rounded-lg" >
                <section className="grid md:grid-cols-2 gap-10 p-2 md:p-10">

                    {/* contact me CTA section*/}
                    <div className="rounded-md flex flex-col gap-5 h-full w-full ">
                        <div className="text-lg md:text-3xl md:text-center text-wrap font-bold">Let&apos;s Work Together</div>

                        <div className="md:text-center md:text-xl">
                            Reach out to me!
                        </div>

                        <div className="flex flex-col md:flex-row justify-center gap-10">
                            <div className="p-2 px-4 flex justify-around gap-2 items-center outline-dashed outline-2 cursor-auto rounded w-full md:w-fit">

                                {/* send email */}
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Link
                                            className="flex justify-center gap-2 items-center"
                                            href={`mailto:${EMAIL}`}
                                            target={"_blank"}
                                            rel={"noopener noreferrer"}
                                        >
                                            <IconMail size={26} />
                                            <span> Email </span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Send Email
                                    </TooltipContent>
                                </Tooltip>

                                <Separator className="invert" orientation={"vertical"} />

                                {/* copy email */}
                                <Tooltip open={copied || hoveredCopy} delayDuration={0}>
                                    <TooltipTrigger
                                        onClick={handleCopy}
                                        className="cursor-pointer"
                                        onMouseEnter={() => setHoveredCopy(true)}
                                        onMouseLeave={() => setHoveredCopy(false)}
                                    >
                                        {copied ? <IconCheck size={26} /> : <IconCopy size={26} />}
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {copied ? "Copied!" : "Copy Email"}
                                    </TooltipContent>
                                </Tooltip>
                            </div>

                            {/* telegram */}
                            <Tooltip >
                                <TooltipTrigger className="cursor-pointer">
                                    <Link
                                        className=
                                        // "flex justify-center gap-2 items-center"
                                        "p-2 px-4 flex justify-center gap-2 items-center rounded outline-dotted outline-2 w-full"
                                        href={`mailto:${EMAIL}`}
                                        target={"_blank"}
                                        rel={"noopener noreferrer"}
                                    >
                                        <IconBrandTelegram size={26} />
                                        <span> Telegram </span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    Send Telegram Message
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>

                    {/* socials section */}
                    <div className="h-full w-full rounded-md flex flex-col flex-wrap items-center px-5 justify-evenly gap-3">

                        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
                            {socials.map(({ icon, name, link }, i) => (
                                <Tooltip key={i}>
                                    <TooltipTrigger>
                                        <Link
                                            className="p-2 aspect-square m-0 rounded-full flex items-center justify-center"
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {icon}
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>{name}</TooltipContent>
                                </Tooltip>
                            ))}
                        </div>

                        <div className="flex items-center justify-start md:justify-center w-full text-nowrap">
                            <span className="inline font-semibold">
                                Made with&nbsp;<IconHeart size={26} className="inline" />&nbsp;by&nbsp;
                                <Link href={"https://github.com/NathanZlion/"} className="hover:underline" target="_blank">Natty</Link>
                            </span>
                        </div>

                    </div>
                </section>
            </footer>

            {/* copy right claim */}
            <section className="text-xs font-dotGothic text-center md:text-start">
                &copy; {new Date().getFullYear()} Nathnael Dereje. All rights reserved.
            </section>
        </div>
    );
};

