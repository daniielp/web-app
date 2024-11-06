// Made by: Daniel
import React from "react";
import Typography from "../Typography";
import { cn } from "../../lib/utils";

interface ProductAmountProps extends React.InputHTMLAttributes<HTMLDivElement> {
  currentPrice: number;
  originalPrice?: number;
}

function ProductPrice({ currentPrice, originalPrice, className, ...props }: ProductAmountProps) {
  return (
    <div className={cn("flex gap-2 items-center", className)} {...props}>
      <Typography variant="subHeading">{currentPrice} kr</Typography>
      {originalPrice && <Typography variant="subHeading" className="font-normal text-red-500 line-through">{originalPrice} kr</Typography>}
    </div>
  );
}

export default ProductPrice;
