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
                <div className="max-w-7xl mx-auto md:py-20 px-4 md:px-8 lg:px-10">
                    <h2 className="text-2xl md:text-6xl mb-4 max-w-4xl">
                        Projects
                    </h2>
                </div>


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
