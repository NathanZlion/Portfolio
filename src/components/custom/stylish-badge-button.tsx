/// button with leading icon, and subtitle text

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeButtonVariant = cva(
    "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap w-fit",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/80",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const badeButtonSubTitleVariant = cva(
    "text-xs text-nowrap",
    {
        variants: {
            variant: {
                default:
                    "text-primary-foreground/50",
                secondary: "text-accent-foreground/50",
                destructive:
                    "text-destructive-foreground/50",
                outline: "text-foreground/50",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeButtonProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeButtonVariant> {
    subtitle?: string,
    icon?: JSX.Element,
    children?: React.ReactNode,
}

function StyledButtonBadge({ className, children, subtitle, icon, variant, ...props }: BadgeButtonProps) {
    return (
        <div className={cn(badgeButtonVariant({ variant }), className)} {...props}>
            {icon}
            <div className="flex flex-col gap-1">
                {children}
                {subtitle && <div className={badeButtonSubTitleVariant({ variant })}>{subtitle}</div>}
            </div>
        </div>
    )
}

export { StyledButtonBadge, badgeButtonVariant }

