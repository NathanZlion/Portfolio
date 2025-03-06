"use client"

import { cn } from "@/lib/utils"
import { ProjectItem } from "@/components/project-item";
import { motion } from "motion/react";
import { projects } from "@/lib/projects";
import { Element } from 'react-scroll';


export const ProjectsSection = ({ className }: { className?: string }) => {
    return (
        <Element name="projects">
            <section className={cn("min-h-screen w-full p-3 scroll-smooth", className)} >
                <div className="title">My Projects</div>

                {/* projects go here */}
                <motion.div className="mt-16 grid grid-cols-12 gap-4">
                    {
                        projects.map((project, index) => (
                            <ProjectItem
                                key={index}
                                project={project}
                                className="rounded-lg col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                            />
                        ))
                    }
                </motion.div>
            </section>
        </Element>
    )
}
