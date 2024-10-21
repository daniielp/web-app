import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const typographyVariants = cva("font-body", {
  variants: {
    variant: {
      heading: "text-2xl font-bold font-display",
      subHeading:
        "text-base font-bold font-display",
      body: "text-sm",
      caption:
        "text-xs",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TypographyProps
  extends React.ButtonHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

const Typography: React.FC<TypographyProps> = ({ variant, className, children, ...props }) => {
  let Comp: React.ElementType;

  switch (variant) {
    case "heading":
      Comp = "h1";
      break;
    case "subHeading":
      Comp = "h2";
      break;
    case "caption":
      Comp = "small";
      break;
    default:
      Comp = "p";
  }

  return <Comp className={cn(typographyVariants({variant, className}))} {...props}>{children}</Comp>;
};

export default Typography;
