"use client"

import { cn } from "@/lib/utils"
import { Project } from "@/components/project-card";
import { ProjectDrawer } from "@/components/project-drawer";
import { motion } from "motion/react";


const projects: Project[] = Array.from({ length: 12 }, (_, index) => ({
    id: `${index + 1}`,
    title: `Project ${index + 1}`,
    shortDescription: "This is a project",
    thumbnail: "/medium-icon.svg",
    tags: ["React", "Tailwind", "TypeScript"],
    link: "#",
    details: {
        features: ["Feature 1", "Feature 2", "Feature 3"],
        overview: "This is an overview",
        techStack: ["React", "Tailwind", "TypeScript"],
        links: {
            demo: "#",
            github: "#",
            caseStudy: "#",
        },
    }
}));


export const ProjectsSection = ({ className }: { className?: string }) => {
    return (
        <section className={cn("min-h-screen w-full p-3", className)} >
            <div className="title">My Projects</div>

            {/* filters go here */}
            <div className="w-full">filter</div>

            {/* projects go here */}
            <motion.div className="mt-16 grid grid-cols-12 gap-4">
                {
                    projects.map((project, index) => (
                        <ProjectDrawer
                            key={index}
                            project={project}
                            className="rounded-lg col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                        />
                    ))
                }
            </motion.div>
        </section>
    )
}
