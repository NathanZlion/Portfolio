import { cn } from "@/lib/utils";


export const SkillsSection = ({ className }: { className?: string }) => {
    return (
        <section className={cn("min-h-screen w-full p-3", className)} >
            <div className="title">My Skills</div>
        </section>
    )
};