import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:stroke-2 dark:focus-visible:ring-zinc-300",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary-01 text-white",
        danger:
          "bg-danger-50 dark:bg-flat-danger text-danger-600 dark:text-danger-500",
        secondary:
          "bg-background-100 dark:bg-background-700 text-foreground-700 dark:text-foreground-200",
      },
      size: {
        default: "text-base",
        small: "text-sm",
        extraSmall: "text-xs",
      },
      iconOnly: {
        false: null,
        true: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      iconOnly: false,
    },
    compoundVariants: [
      {
        variant: ["primary", "danger", "secondary"],
        size: "default",
        className: "rounded-2xl py-4 [&_svg]:size-5",
      },
      {
        variant: ["primary", "danger", "secondary"],
        size: "small",
        className: "rounded-xl py-3 [&_svg]:size-[1.125rem]",
      },
      {
        variant: ["primary", "danger", "secondary"],
        size: "extraSmall",
        className: "rounded-lg py-2 [&_svg]:size-4",
      },
      {
        iconOnly: true,
        size: "default",
        className: "w-12 h-12 [&_svg]:size-6",
      },
      {
        iconOnly: true,
        size: "small",
        className: "w-10 h-10 [&_svg]:size-5",
      },
      {
        iconOnly: true,
        size: "extraSmall",
        className: "w-8 h-8 [&_svg]:size-4",
      },
    ],
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconOnly, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, iconOnly, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
