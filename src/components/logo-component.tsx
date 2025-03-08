import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


const logoVariants = cva(
    "fixed top-0 left-5 z-50 p-4 w-fit",
    {
        variants: {
            variant: {
                default: "",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface LogoProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <header className={cn(logoVariants({ variant, className }))} ref={ref} {...props}>
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold font-dotGothic bg-clip-text text-transparent bg-gradient-to-r from-chart-1 to-chart-2">
                        &lt;Nath /&gt;
                    </span>
                </div>
            </header>
        )
    }
)

Logo.displayName = "Logo"

export { Logo, logoVariants }
