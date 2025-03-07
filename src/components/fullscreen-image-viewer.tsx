import { IconMinimize, IconChevronLeft, IconChevronRight, IconZoomIn, IconZoomOut, IconAlignBoxCenterMiddle } from "@tabler/icons-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";


type FullscreenImageViewerProps = {
    src: string;
    onClose: () => void;
    onPrev?: () => void;
    onNext?: () => void;
};

export const FullscreenImageViewer = ({ src, onClose, onPrev, onNext }: FullscreenImageViewerProps) => {
    const [scale, setScale] = useState(1);  // Zoom level
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const draggableRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();


    const scaleToNormal = () => {
        if (containerRef.current && imgRef.current) {
            const container = containerRef.current;
            const img = imgRef.current;

            // Ensure the image is loaded before computing dimensions
            if (img.naturalWidth && img.naturalHeight) {
                const containerRatio = container.clientWidth / container.clientHeight;
                const imgRatio = img.naturalWidth / img.naturalHeight;

                if (imgRatio > containerRatio) {
                    setScale(container.clientWidth / img.naturalWidth);
                } else {
                    setScale(container.clientHeight / img.naturalHeight);
                }
            }
        }
    }


    // Adjust initial scale to fit image inside container
    useEffect(() => {
        scaleToNormal()
    }, [src]);

    const handleDragableOutOfContainer = () => {
        if (containerRef.current && draggableRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const draggableRect = draggableRef.current.getBoundingClientRect();

            // The draggable element is out of the container bounds becoming invisible
            const isOut = (
                draggableRect.left > containerRect.right ||
                draggableRect.right < containerRect.left ||
                draggableRect.top > containerRect.bottom ||
                draggableRect.bottom < containerRect.top
            );

            if (isOut) {
                controls.start({ x: 0, y: 0 });
            }
        }
    };

    return (
        <AnimatePresence>
            {src && (
                <motion.div
                    ref={containerRef}
                    className="fixed inset-0 flex items-center justify-center bg-foreground/5 backdrop-blur-md z-50 overflow-hidden cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >

                    <Button
                        className="invert fixed rounded-full p-2 top-4 right-4"
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                    >
                        <IconMinimize />
                    </Button>

                    {/* Draggable Image Container */}
                    <motion.div
                        ref={draggableRef}
                        className="relative max-w-full max-h-full flex items-center justify-center"
                        initial={{ scale: 0.8 }}
                        animate={controls}
                        exit={{ scale: 0.8 }}
                        onClick={(e) => e.stopPropagation()}
                        drag
                        dragElastic={0.9}
                        dragMomentum={false}
                        onDragEnd={handleDragableOutOfContainer}
                        whileDrag={{ cursor: "grabbing" }}
                        whileHover={{ cursor: "grab" }}
                    >
                        <motion.img
                            ref={imgRef}
                            src={src}
                            alt="Fullscreen"
                            className="
                                object-contain select-none pointer-events-none
                                 relative max-w-full max-h-full flex items-center justify-center
                            "
                            draggable="false"
                            style={{ transform: `scale(${scale})` }}
                        />
                    </motion.div>

                    {/* Bottom Control Bar */}
                    <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center invert ">
                        <div className="flex items-center justify-center gap-4 px-4">

                            <Button
                                className="rounded-full"
                                disabled={!onPrev}
                                onClick={
                                    (e) => {
                                        e.stopPropagation();
                                        if (onPrev) {
                                            onPrev();
                                        }
                                    }
                                }
                            >
                                <IconChevronLeft />
                            </Button>

                            <Button
                                className="rounded-full p-2"
                                onClick={(e) => { e.stopPropagation(); setScale(prev => Math.min(prev + 0.2, 3)); }}
                            >
                                <IconZoomIn />
                            </Button>
                            <Button
                                className="rounded-full p-2"
                                onClick={(e) => { e.stopPropagation(); setScale(prev => Math.max(prev - 0.2, 0.5)); }}
                            >
                                <IconZoomOut />
                            </Button>

                            <Button
                                className="rounded-full p-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    controls.start({ x: 0, y: 0 });
                                    scaleToNormal();
                                }}
                            >
                                <IconAlignBoxCenterMiddle />
                            </Button>

                            <Button
                                className="rounded-full"
                                disabled={!onNext}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    controls.start({ x: 0, y: 0 });
                                    if (onNext) {
                                        onNext();
                                    }
                                }}
                            >
                                <IconChevronRight />
                            </Button>
                        </div>
                        <span className="text-muted-foreground text-xs">Click within this modal ouside of image to close  preview</span>
                    </div>


                </motion.div>
            )}
        </AnimatePresence>
    );
};


