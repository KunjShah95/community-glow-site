import * as React from "react";
import { cn } from "@/lib/utils";
import { badgeVariants } from "./variants/badgeVariants";
import type { VariantProps } from "class-variance-authority";

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge };
