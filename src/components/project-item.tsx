import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerPortal,
    DrawerOverlay,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMinimize } from "@tabler/icons-react";
import { SectionComponents } from "./sections";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Project } from "@/lib/projects";
import { Separator } from "../components/ui/separator";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Image from "next/image";


export const ProjectItem = (
    { project, className }: {
        project: Project,
        className?: string
    }
) => {
    const [open, setOpen] = useState(false);
    const isMobile = useIsMobile();

    // Mobile drawer view
    if (isMobile) {
        return (
            <Drawer open={open} onOpenChange={setOpen} modal>
                <DrawerTrigger className={cn(className)}>
                    <ProjectCard project={project} />
                </DrawerTrigger>

                <DrawerPortal >
                    <DrawerOverlay />

                    <DrawerContent className="p-4 h-[85vh] flex flex-col">
                        <DrawerHeader >
                            <DrawerTitle className="text-xl font-bold">{project.title}</DrawerTitle>
                            <DrawerDescription className="text-sm italic">
                                {project.time ? `__ ${project.time} __` : project.tags?.join(", ")}
                            </DrawerDescription>
                        </DrawerHeader>

                        <ScrollArea type="always">
                            {/* Thumbnail */}
                            <div className="w-full flex flex-col items-center gap-2">
                                <Image
                                    src={project.thumbnail}
                                    width={200}
                                    height={200}
                                    alt={project.title}
                                    className="w-full object-cover rounded-lg"
                                />
                                <div className="flex flex-wrap gap-2">
                                    {project.tags?.map((tag, index) => (
                                        <Badge key={index} className="bg-primary text-background">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap gap-2 my-4">
                                {project.links?.map((link) => (
                                    <Link
                                        key={link.text}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-2 border-primary/90 bg-background p-1 flex items-center gap-2 rounded-lg"
                                    >
                                        {link.icon}
                                        {link.text}
                                    </Link>
                                ))}
                            </div>

                            <DrawerDescription className="text-lg mt-5">
                                {project.description}
                            </DrawerDescription>

                            {/* Sections */}
                            <div className="flex flex-col gap-6 mt-4">
                                {project.details.sections?.map((section, index) => (
                                    <div key={index}>
                                        {SectionComponents({ section, project, index, setOpen })}
                                        {project.details.sections && index < project.details.sections.length - 1 && <Separator className="bg-primary/50" />}
                                    </div>
                                ))}
                            </div>

                            <ScrollBar orientation="vertical" className="text-green-300" />
                        </ScrollArea>

                        <DrawerFooter className="flex items-end">
                            <DrawerClose>
                                <Button
                                    variant="outline"
                                    aria-label="Close"
                                >
                                    <IconMinimize />
                                </Button>
                            </DrawerClose>
                        </DrawerFooter>

                    </DrawerContent>
                </DrawerPortal>
            </Drawer>
        );
    };

    // desktop view shows a dialog box
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className={cn(className)} asChild>
                <ProjectCard project={project} />
            </DialogTrigger>

            <AnimatePresence initial={false} mode="popLayout">
                {open && (
                    <DialogContent className="md:min-w-[80vw] md:min-h-[70vh] overflow-visible outline select-none">
                        <div className="flex flex-col md:flex-row gap-4 h-full">

                            {/* Left: Sticky Thumbnail */}
                            <div className="md:sticky md:top-0 md:h-full md:w-1/3 flex-shrink-0">

                                <motion.img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full object-cover rounded-xl"
                                    layoutId={`project_${project.id}_thumbnail`}
                                />

                                <motion.div
                                    className="flex gap-2 flex-wrap"
                                    layoutId={`project_${project.id}_badges`}
                                >
                                    {
                                        project.tags?.map((tag, index) => (
                                            <Badge
                                                key={index}
                                                className="bg-primary text-background mt-2"
                                            >
                                                {tag}
                                            </Badge>
                                        ))
                                    }
                                </motion.div>
                            </div>

                            {/* Right: Scrollable Content */}
                            <div className="md:w-2/3 md:h-[70vh] overflow-y-auto px-4">
                                <motion.div layoutId={`project_${project.id}_card`}>

                                    {/* Header part */}
                                    <motion.div layoutId={`project_${project.id}_title`} className="sticky top-0 backdrop-blur-lg bg-background/90">
                                        <DialogTitle className="text-3xl">{project.title}</DialogTitle>

                                        <DialogDescription className="text-sm italic capitalize">
                                            {
                                                project.time ?
                                                    `__ ${project.time} __` :
                                                    project.tags?.join(", ")
                                            }
                                        </DialogDescription>
                                    </motion.div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-2 my-4">
                                        {project.links?.map((link, index) => (
                                            <motion.div whileHover={{ scale: 1.05 }} key={index}>
                                                <Link
                                                    key={link.text}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="border-2 border-primary/90 bg-background p-1 flex items-center gap-2 rounded-lg"
                                                >
                                                    {link.icon}
                                                    {link.text}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <DialogDescription className="text-lg mt-5">
                                        {project.description}
                                    </DialogDescription>

                                </motion.div>

                                {/* Sections or other details */}
                                <div className="flex flex-col gap-10 mb-10">
                                    {project.details.sections?.map((section, index) => {
                                        const component = SectionComponents({ section, project, index, setOpen })
                                        return (
                                            <div key={index}>
                                                {component}

                                                {
                                                    project.details.sections &&
                                                    index < project.details.sections.length - 1 &&
                                                    <Separator orientation="horizontal" className="bg-primary/50" />
                                                }
                                            </div>
                                        );
                                    })}
                                </div >
                            </div>
                        </div>
                    </DialogContent>
                )}
            </AnimatePresence>
        </Dialog >
    );
};

