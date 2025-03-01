import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { ScrollBar } from "./ui/scroll-area";


export type Project = {
    id: string;
    title: string;
    shortDescription: string;
    thumbnail: string;
    tags: string[];
    details: {
        overview: string;
        features: string[];
        techStack: string[];
        challenges?: { problem: string; solution: string }[];
        links: {
            demo?: string;
            github?: string;
            caseStudy?: string;
        };
    };
};


export const ProjectCard = ({
    project,
    className,
    onClick,
}: {
    project: Project,
    className?: string,
    onClick?: () => void,
}) => {


    console.log(project.tags);

    return (
        <motion.div
            className={cn("bg-green-500 ", className)}
            onClick={onClick}
            layoutId={`project_${project.id}_card`}
        >

            <motion.img
                layoutId={`project_${project.id}_thumbnail`}
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-40 object-cover"
            />

            <motion.section className="p-5">
                <motion.p
                    className="text-lg font-bold"
                    layoutId={`project_${project.id}_title`}
                >
                    {project.title}
                </motion.p>

                <motion.p className="text-sm">{project.shortDescription}</motion.p>

                <ScrollArea className="w-full">
                    <motion.div className="flex flex-nowrap gap-2">
                        {
                            project.tags.map((tag, index) => (
                                <motion.span key={`${project.title}_tag_${index}`}>
                                    <Badge> {tag} </Badge>
                                </motion.span>
                            ))
                        }
                    </motion.div>
                    <ScrollBar orientation="horizontal" className="h-1" />
                </ScrollArea>
            </motion.section>
        </motion.div >
    )
}