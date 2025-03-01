import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button";
import { Project, ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { IconCross } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";


export const ProjectDrawer = ({ project, className }: { project: Project, className?: string }) => {

    const [open, setOpen] = useState(false);
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger className={cn(className)}>
                    <ProjectCard project={project} />
                </DrawerTrigger>


                <AnimatePresence
                    // Disable initial animation
                    initial={false}
                    // only render one modal at a time
                    mode="popLayout"
                >
                    <DrawerContent>
                        <motion.div
                            className={cn("bg-green-500 ")}
                            layoutId={`project_${project.id}_card`}
                        >
                            <DrawerHeader>
                                <DrawerTitle>
                                    <motion.div
                                        layoutId={`project_${project.id}_title`}
                                        initial={{ opacity: 0 }}
                                    >
                                        {project.title}
                                    </motion.div>
                                </DrawerTitle>
                                <DrawerDescription>{project.details.overview}</DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <DrawerClose>
                                    <Button variant="outline">Close</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </motion.div>
                    </DrawerContent>
                </AnimatePresence>

            </Drawer>
        );
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className={cn(className)} asChild>
                <ProjectCard project={project} />
            </DialogTrigger>

            <AnimatePresence
                // Disable initial animation
                initial={false}
                // only render one modal at a time
                mode="popLayout"
            >
                <DialogContent className="sm:max-w-[425px]">
                    <motion.div
                        className={cn("bg-green-500 ")}
                        layoutId={`project_${project.id}_card`}
                    >
                        <DialogHeader>
                            <DialogHeader>
                                <DrawerClose asChild>
                                    <IconCross />
                                </DrawerClose>
                                <DialogTitle>{project.title}</DialogTitle>
                                <DialogDescription>{project.details.overview}</DialogDescription>
                            </DialogHeader>
                        </DialogHeader>
                    </motion.div>
                </DialogContent>
            </AnimatePresence>
        </Dialog>
    );
};

