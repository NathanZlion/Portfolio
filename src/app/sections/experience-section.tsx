"use client"

import Image from "next/image";
import React from "react";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { IconHash, IconLink, IconStar } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { LinkPreview } from "@/components/ui/link-preview";
import { Element } from 'react-scroll';

export const ExperienceSection = () => {
    const data: TimelineEntry[] = [
        {
            title: {
                company: "Upwork",
                role: "Full Stack Developer",
                duration: "Jul 2024 - Aug 2024",
                location: "Nigeria - Remote"
            },
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        Developed AI Humanizer, a platform that transforms AI-generated text into humanized content.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
                        <li>Designed and implemented authentication and rate limiting.</li>
                        <li>Integrated advanced AI text transformation models.</li>
                        <li>Built a responsive frontend with React.js and managing state with React Query.</li>
                        <li>Implemented a referral feature,</li>
                        <li>Integrated

                            {" "}
                            <LinkPreview
                                url="https://paystack.com/"
                                className="font-bold no-underline"
                                target="_blank"
                            >
                                <IconLink className="inline" />
                                Paystack
                            </LinkPreview>
                            {" "}
                            payment ensuring secure transactions.</li>
                        <li> Earned 5 star
                            {" "}
                            {[...Array(5)].map((_, i) => (
                                <IconStar key={i} className="inline" />
                            ))}
                            {" "}
                            rating by doing an exceptional work and great communication.
                        </li>
                    </ul>

                    {/* Include 5 star review */}
                </div>
            ),
        },
        {
            title: {
                company: "School of Information Technology and Engineering",
                role: "Full Stack Software Engineer | Intern",
                location: "Addis Ababa, Ethiopia - Hybrid",
                duration: "Feb 2024 - Jun 2024",
            },
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        Developed and tested full-stack application using modern frameworks.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
                        <li> Integrated new features for ORDMS administrative management system using <span className="font-bold">Angular</span> and <span className="font-bold">ASP.NET Core</span>,
                            improving application functionality.</li>
                        <li> Enhanced system reliability by writing End-to-End tests using Playwright leading in the discovery of 2 bugs</li>
                        <li> Resolved a critical backend bug by refactoring QR and Barcode generation to work on Linux environment, leading to the fix of a system breaking bug.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: {
                company: "A2SV | Africa to Silicon Valley",
                role: "Head of Community Education",
                location: "Addis Ababa, Ethiopia - Inperson",
                duration: "Jan 2024 - Nov 2024",
            },
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        <IconHash className="inline" />
                        Mentored and guided 500+ students from 11 countries, delivering lectures
                        and coordinating problem-solving sessions.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
                        <li>Developed structured education programs in Data Structures and Algorithms.</li>
                        <li>Automated tasks with <span className="font-bold">Google Apps Script</span> for attendance tracking and progress updates, reducing manual effort.</li>
                        <li>Organized weekly <span className="font-bold">Codeforces</span> competitive programming contests.</li>
                    </ul>

                    <Separator orientation="horizontal" className="bg-foreground my-5" />

                    <div>
                        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                            <IconHash className="inline" /> Led Africa’s largest hackathon with nearly 5,000 participants from 48 countries.
                        </p>
                        <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
                            <li>Oversaw logistics, partnerships, and outreach as part of an{" "}
                                <LinkPreview
                                    url="https://hackathon.a2sv.org/about-us#:~:text=Meet%20The%20Hackathon%20Organizers"
                                    imageSrc="/hackathon_meet_the_team.png"
                                    isStatic={true}
                                    className="font-bold"
                                    target="_blank"
                                >
                                    organizing team

                                </LinkPreview>{" "}
                                of 8 members.
                            </li>

                            <li>
                                Built a website to visualize registration data with <span className="font-bold">Google Appscript Syncing</span>, enabling real-time monitoring of participant registration.
                                {" "}
                                <LinkPreview
                                    url="https://hacks-datavis.vercel.app/"
                                    className="font-bold no-underline"
                                    // to avoid the loading spinner from being the preview image
                                    // let's add a static image here
                                    imageSrc="/hackathon_datavis.png"
                                    isStatic={true}
                                    target="_blank"
                                >
                                    <IconLink className="inline" />
                                    View website.
                                </LinkPreview>
                                {" "}
                            </li>
                        </ul>
                    </div>

                    <div className="my-5 grid grid-cols-2 gap-4">
                        <Image
                            src="/a2sv_hackathon.png"
                            alt="Hackathon Logo"
                            width={800}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-90 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/hackathon_datavis.png"
                            alt="startup template"
                            width={800}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-90 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        }, {
            title: {
                company: "Eskalate",
                website: "https://www.eskalate.io",
                role: "Product Developer",
                location: "Addis Ababa, Ethiopia - Inperson",
                duration: "Nov 2023 - Jan 2024",
            },
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
                        Conducted market research and developed a new product concept.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
                        <li>Refined product features based on market demand analysis.</li>
                        <li>Drafted a comprehensive Product Requirements Document (PRD).</li>
                    </ul>
                </div>
            ),
        },
    ];


    return (
        <Element name="experience">
            <div className="max-w-7xl mx-auto md:py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-2xl md:text-6xl mb-4 max-w-4xl">
                    Experience
                </h2>
            </div>

            <Timeline data={data} />
        </Element>
    );
}
