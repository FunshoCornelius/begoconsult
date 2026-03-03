import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge — small pill label. Category variants match the training program
 * categories seen in the design screenshots.
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary",
        cloud: "bg-teal-100 text-teal-700",
        bigdata: "bg-orange-100 text-orange-700",
        integration: "bg-red-100 text-red-600",
        management: "bg-yellow-100 text-yellow-800",
        secondary: "bg-gray-100 text-gray-600",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
