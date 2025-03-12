"use client"

import { Element } from "react-scroll";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type education = {
    level: string;
    school: string;
    time: string;
    achievements?: string[];
    ongoing?: boolean;
}

export const EducationSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const education: education[] = [
        {
            level: "BSc Degree",
            school: "Addis Ababa University, Addis Ababa Institute of Technology",
            time: "July 2020 - July 2025 (Expected)",
            achievements: ["Pursuing BSc in Software Engineering, in AI Stream."],
            ongoing: true,
        },
        {
            level: "DSA Training",
            school: "Africa to Silicon Valley",
            time: "Dec 2022 – Nov 2023",
            achievements: [
                "Explored over 30 distinct DSA concepts, like Searching Algorithms, Trees, Trie, Graphs within a span of 1-year."
            ],
        },
        {
            level: "High School & Preparatory School",
            school: "Donbosco Highschool & Preparatory School",
            time: "2016 - 2020",
            achievements: [
                "Top of my class every year",
                "Top achiever in preparatory school",
            ],
        },
        {
            level: "Elementary School",
            school: "Neway Challenge School",
            time: "2004 - 2016",
        },
    ];

    return (
        <Element name="education" className="w-full">
            <section className="w-full">
                <div className="max-w-7xl mx-auto py-0 px-4 md:px-8 lg:px-10">

                    <div className="max-w-7xl mx-auto md:py-20 px-4 md:px-8 lg:px-10">
                        <h2 className="text-2xl md:text-6xl max-w-4xl">
                            Education
                        </h2>
                    </div>

                    {EducationList(
                        education.filter(edu => edu.ongoing),
                        "border-l-8 border-green-300 pl-7 mt-6"
                    )}

                    {/* Collapsible Section */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden mt-4 space-y-6"
                            >

                                {EducationList(
                                    education.filter(edu => !edu.ongoing),
                                    "border-l-4 border-gray-300 pl-4"
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Toggle Button */}
                    <Button
                        variant={"outline"}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-6 flex items-center font-medium hover:underline"
                    >
                        {isExpanded ? "Show Less" : "Show More"}
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-2"
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </Button>
                </div>
            </section>
        </Element>
    );
};


const EducationList = (education: education[], className?: string) => {
    console.log(education)
    return education.map((edu, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={cn("border-l-4 border-gray-300 pl-4", className)}
        >
            <h3 className="text-xl font-semibold">{edu.level}</h3>
            <p className="">{edu.school}</p>
            <p className="text-muted-foreground text-sm">{edu.time}</p>
            {edu.achievements && (
                <ul className="list-disc list-inside mt-2 text-gray-500">
                    {edu.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                    ))}
                </ul>
            )}
        </motion.div>
    ))
}