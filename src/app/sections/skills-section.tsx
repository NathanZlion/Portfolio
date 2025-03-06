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
    IconBrandTypescript
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
                    { name: "Python", icon: <IconBrandPython size={22} /> },
                    { name: "Golang", icon: <IconBrandGolang /> },
                    { name: "Typescript", icon: <IconBrandTypescript size={22} /> },
                    { name: "Javascript", icon: <IconBrandJavascript size={22} /> },
                    { name: "Java", icon: <IconJava className="w-6 h-6" /> },
                    { name: "", icon: <IconBrandCSharp size={22} /> },
                    { name: "CPP", icon: <IconBrandCpp size={22} /> },
                    { name: "Dart", icon: <IconDart /> },
                ]
            },
            {
                title: "Frameworks & Libraries",
                skills: [
                    { name: "Go Fiber", icon: <IconBrandGoFiber /> },
                    { name: "FastAPI", icon: <IconBrandFastAPI /> },
                    { name: "React", icon: <IconBrandReact /> },
                    { name: "Flutter", icon: <IconBrandFlutter /> },
                    { name: "NextJs", icon: <IconBrandNextjs /> },
                    { name: "Angular", icon: <IconBrandAngularFilled /> },
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
                    { name: "MySQL", icon: <IconBrandMysql /> },
                    { name: "MongoDB", icon: <IconBrandMongodb /> },
                    { name: "Graph Database", icon: <IconBrandNeo4j /> },
                ],
            },
            {
                title: "Tools and Technologies",
                skills: [
                    { name: "Docker", icon: <IconBrandDocker /> },
                    { name: "Git", icon: <IconBrandGit /> },
                    { name: "Redis", icon: <IconBrandReddis /> },
                    { name: "Firebase", icon: <IconBrandFirebase /> },
                    { name: "RabbitMQ", icon: <IconBrandRabbitMQ /> }
                ]
            }
        ]

    return (
        <Element name="skills" className="w-full">
            <section className={cn("min-h-screen p-3", className)} id="skills">
                <div className="title">My Skills</div>

                <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-y-20 w-full p-4 items-start">
                    {
                        data.map(({ title, skills }, index) => (
                            <div key={`skill_section_${index}`} className="row-span-1 flex flex-col gap-5 items-center justify-center">
                                <h2 className="text-xl md:text-2xl text-start md:text-center w-full">{title}</h2>

                                <div className="flex flex-wrap gap-2 md:gap-4 md:justify-center">
                                    {
                                        skills.map(({ name, icon }, i) => (
                                            <span key={i} className="border border-foreground flex rounded-lg px-1 gap-1">
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