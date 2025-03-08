"use client";

import { cn } from "@/lib/utils";
import {
    IconBrandAngularFilled,
    IconBrandCpp,
    IconBrandCSharp,
    IconBrandDocker,
    IconBrandFirebase,
    IconBrandFlutter,
    IconBrandGit,
    IconBrandGolang,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandMysql,
    IconBrandNextjs,
    IconBrandPython,
    IconBrandReact,
    IconBrandTypescript,
    IconIndentIncrease
} from "@tabler/icons-react";
import { Element } from "react-scroll";

import {
    IconDart,
    IconBrandGoFiber,
    IconJava,
    IconBrandReddis,
    IconBrandNeo4j,
    IconBrandPostgres,
    IconBrandPytorch,
    IconBrandTensorflow,
    IconBrandRabbitMQ,
    IconBrandFastAPI,
} from "@/components/icons/index"


export const SkillsSection = ({ className }: { className?: string }) => {

    const data: {
        title: string;
        skills: {
            name: string;
            icon?: JSX.Element;
        }[];
    }[] = [
            {
                title: "Programming Languages",
                skills: [
                    { name: "Python", icon: <IconBrandPython size={22} stroke={1.5} /> },
                    { name: "Golang", icon: <IconBrandGolang stroke={1.5} /> },
                    { name: "Typescript", icon: <IconBrandTypescript size={22} stroke={1.5} /> },
                    { name: "Javascript", icon: <IconBrandJavascript size={22} stroke={1.5} /> },
                    { name: "Java", icon: <IconJava className="w-6 h-6" /> },
                    { name: "", icon: <IconBrandCSharp size={22} stroke={1.5} /> },
                    { name: "CPP", icon: <IconBrandCpp size={22} stroke={1.5} /> },
                    { name: "Dart", icon: <IconDart /> },
                ]
            },
            {
                title: "Frameworks & Libraries",
                skills: [
                    { name: "Go Fiber", icon: <IconBrandGoFiber /> },
                    { name: "FastAPI", icon: <IconBrandFastAPI /> },
                    { name: "React", icon: <IconBrandReact stroke={1.5} /> },
                    { name: "Flutter", icon: <IconBrandFlutter stroke={1.5} /> },
                    { name: "NextJs", icon: <IconBrandNextjs stroke={1.5} /> },
                    { name: "Angular", icon: <IconBrandAngularFilled stroke={1.5} /> },
                    { name: "PyTorch", icon: <IconBrandPytorch /> },
                    { name: "Tensorflow", icon: <IconBrandTensorflow /> },
                    { name: "DotNet" },
                    { name: "ExpressJS" },
                ],
            },
            {
                title: "Databases",
                skills: [
                    { name: "PostgreSQL", icon: <IconBrandPostgres /> },
                    { name: "MySQL", icon: <IconBrandMysql stroke={1.5} /> },
                    { name: "MongoDB", icon: <IconBrandMongodb stroke={1.5} /> },
                    { name: "Graph Database", icon: <IconBrandNeo4j /> },
                ],
            },
            {
                title: "Tools and Technologies",
                skills: [
                    { name: "Docker", icon: <IconBrandDocker stroke={1.5} /> },
                    { name: "Git", icon: <IconBrandGit stroke={1.5} /> },
                    { name: "Redis", icon: <IconBrandReddis /> },
                    { name: "Firebase", icon: <IconBrandFirebase stroke={1.5} /> },
                    { name: "RabbitMQ", icon: <IconBrandRabbitMQ /> }
                ]
            }
        ]

    return (
        <Element name="skills" className="w-full">
            <section className={cn("min-h-screen p-3", className)} id="skills">

                <div className="max-w-7xl mx-auto md:py-20 px-4 md:px-8 lg:px-10">
                    <h2 className="text-2xl md:text-6xl mb-4 max-w-4xl">
                        Skills
                    </h2>
                </div>

                <div className="md:my-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-y-20 w-full p-4 items-start">
                    {
                        data.map(({ title, skills }, index) => (
                            <div key={`skill_section_${index}`} className="row-span-1 flex flex-col gap-5 items-center justify-center">
                                <div className="w-full flex items-center gap-1">
                                    <IconIndentIncrease className="inline" />
                                    <span className="text-xl md:text-3xl font-bold">
                                        {title}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2 md:gap-4 justify-start">
                                    {
                                        skills.map(({ name, icon }, i) => (
                                            <span key={i} className="border border-foreground flex rounded-lg px-1 gap-1 opacity-85 cursor-default select-none">
                                                {icon}
                                                <span className="text-base">{name}</span>
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </Element>
    )
};