import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 transition-all duration-300 ease-out",
  {
    variants: {
      intent: {
        primary:
          "bg-primary-500 text-white hover:bg-primary-600 hover:shadow-xl",
        secondary:
          "bg-primary-flat text-primary-500 hover:bg-[rgba(29,144,245,0.25)] hover:text-primary-400",
        danger:
          "bg-danger-flat text-danger-500 hover:bg-[rgba(239,68,68,0.25)] hover:text-danger-400",
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
    compoundVariants: [
      {
        iconOnly: false,
        size: "default",
        className: "px-8 py-4 rounded-6xl [&_svg]:w-6 [&_svg]:h-6",
      },
      {
        iconOnly: false,
        size: "small",
        className: "px-8 py-4 rounded-5xl [&_svg]:w-5 [&_svg]:h-5",
      },
      {
        iconOnly: false,
        size: "extraSmall",
        className: "px-6 py-3 rounded-4xl [&_svg]:w-5 [&_svg]:h-5",
      },
      {
        iconOnly: true,
        size: "default",
        className: "w-12 h-12 [&_svg]:w-6 [&_svg]:h-6",
      },
      {
        iconOnly: true,
        size: "small",
        className: "w-10 h-10 [&_svg]:w-5 [&_svg]:h-5",
      },
      {
        iconOnly: true,
        size: "extraSmall",
        className: "w-8 h-8 [&_svg]:w-4 [&_svg]:h-4",
      },
    ],
    defaultVariants: {
      size: "default",
      intent: "primary",
      iconOnly: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, iconOnly, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ intent, size, iconOnly, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
