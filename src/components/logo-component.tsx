import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


const logoVariants = cva(
    "fixed top-0 left-5 z-50 p-4 bg-background w-fit",
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
    asChild?: boolean
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        return (
            <header className={cn(logoVariants({ variant, className }))} ref={ref} {...props}>
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold font-dotGothic bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                        &lt;Nath /&gt;
                    </span>
                </div>
            </header>
        )
    }
)

Logo.displayName = "Logo"

export { Logo, logoVariants }
