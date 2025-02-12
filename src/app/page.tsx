'use client'

import { Progress } from "@/components/ui/progress";
import { FaApple } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const totalDuration = 2000;
    // frame rate is 60fps, so 50ms is the closest to 1/60
    const intervalTime = 50;
    const fadeOutDuration = 200;
    const steps = totalDuration / intervalTime;

    const interval = setInterval(() => {
      const t = start / steps;
      // Quadratic easing: starts slow, ends fast
      const easedProgress = Math.pow(t, 2) * 100;
      setProgress(Math.min(easedProgress, 100));

      start++;
      if (start >= steps) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => setIsLoading(false), fadeOutDuration);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          className="flex flex-col gap-14 items-center justify-center h-screen w-screen bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaApple className="text-white text-6xl size-28" />
          <Progress className="w-40 h-1 bg-gray-500" value={progress} />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
