import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { ScrollBar } from "./ui/scroll-area";
import { Project } from "@/lib/projects";



export const ProjectCard = ({
    project,
    className,
    onClick,
}: {
    project: Project,
    className?: string,
    onClick?: () => void,
}) => {

    return (
        <motion.div
            className={cn("cursor-pointer group outline outline-primary/10 rounded-2xl hover:outline-primary/40 duration-300 p-1 flex flex-col max-h-[30rem]", className)}
            onClick={onClick}
            layoutId={`project_${project.id}_card`}
        >

            <motion.img
                layoutId={`project_${project.id}_thumbnail`}
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl filter md:grayscale-[45%] group-hover:filter-none duration-300"
            />

            <motion.section className="p-5 flex-1 flex flex-col justify-between gap-4">
                <motion.p
                    className="text-base group-hover:font-extrabold  group-hover:underline duration-300"
                    layoutId={`project_${project.id}_title`}
                >
                    {project.title}
                </motion.p>

                <motion.p className="text-sm flex-1 overflow-ellipsis">{project.description}</motion.p>

                <ScrollArea className="w-full mt-5">
                    <motion.div className="flex flex-nowrap gap-2"
                        layoutId={`project_${project.id}_badges`}
                    >
                        {
                            project.tags?.map((tag, index) => (
                                <motion.span key={`${project.title}_tag_${index}`}>
                                    <Badge className="text-nowrap"> {tag} </Badge>
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