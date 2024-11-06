// Made by: Daniel
import React from "react";
import { cn } from "../../lib/utils";
import Typography from "../Typography";

interface ProductAmountProps extends React.InputHTMLAttributes<HTMLDivElement> {
  quantity: number;
}

function ProductAmount({ quantity, className, ...props }: ProductAmountProps) {
  function getAmountStyling() {
    if (quantity <= 5) {
      return "bg-red-500";
    }
    if (quantity > 5 && quantity <= 10) {
      return "bg-yellow-500";
    }

    return "bg-[#8BD46F]";
  }

  function getRange() {
    if(quantity <= 5) {
      return "1-5"
    }
    if (quantity > 5 && quantity <= 10) {
      return "5-10";
    }

    return "10+"
  }

  return (
    <div
      className={cn(
        getAmountStyling(),
        "flex justify-center items-center rounded-2xl rounded-tr-none rounded-bl-none px-6 py-2 text-center",
        className
      )}
      {...props}
    >
      <Typography variant="caption">{getRange()} stk.</Typography>
    </div>
  );
}

export default ProductAmount;
