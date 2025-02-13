/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export interface FloatingDockItem {
    title: string;
    icon: React.ReactNode;
    onClick?: () => void;
    open?: boolean;
}

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: FloatingDockItem[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: FloatingDockItem[];
    className?: string;
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn("relative block md:hidden", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <Link
                                    href={""}
                                    key={item.title}
                                    className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                                >
                                    <div className="h-4 w-4">{item.icon}</div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
            >
                <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: FloatingDockItem[];
    className?: string;
}) => {
    const mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn("mx-auto hidden md:flex h-20 gap-4 items-center  rounded-2xl bg-background/20 px-2 pb-2 hover:pb-5 border border-accent-foreground/25 backdrop-blur-md shadow-md", className)}
        >
            {items.map((item, index) => (
                <IconContainer mouseX={mouseX} key={`dock_menu_icon_${index}`} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    onClick,
    open,
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    onClick?: () => void;
    open?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [50, 100, 50]);

    const widthTransformIcon = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
    const heightTransformIcon = useTransform(distance, [-150, 0, 150], [50, 100, 50]);


    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <Link href={""}
            onClick={onClick}
            className="border border-accent-foreground/5 hover:border-accent-foreground/5
                rounded-2xl bg-transparent w-fit h-fit p-0">
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square rounded-2xl bg-background/10 flex items-center justify-center relative p-0 m-0

                ">
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100/10 border
                            dark:bg-neutral-800 dark:border-neutral-900/10 dark:text-white
                            border-gray-200/10 text-neutral-700 absolute left-1/2 -translate-x-1/2
                            -top-8 text-xs
                             "
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center p-0 rounded-xl"
                >
                    {icon}
                </motion.div>

                {/* open indicator dot */}
                {
                    open && (
                        <motion.div className="absolute h-1 w-1 rounded-full bg-foreground/45 -bottom-2" />
                    )
                }
            </motion.div>
        </Link>
    );
}
