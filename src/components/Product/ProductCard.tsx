import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "../Drawer";
import ProductInformation from "./ProductInformation";
import { cn } from "../../lib/utils";
import ProductAmount from "./ProductAmount";
import Typography from "../Typography";
import ProductPrice from "./ProductPrice";

export interface ProductCardProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  productName: string;
  currentPrice: number;
  originalPrice?: number;
  quantity: number;
  imageUrl: string;
}

function ProductCard({
  productName,
  currentPrice,
  originalPrice,
  quantity,
  imageUrl,
  className,
  ...props
}: ProductCardProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className={cn("flex flex-col gap-2 max-w-[150px] flex-shrink-0", className)} {...props}>
          <div className="relative w-full">
            <img
              src={imageUrl}
              alt=""
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-contain sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#E9E9EA]"></div>
            <ProductAmount
              className="absolute top-0 left-0"
              quantity={quantity}
            />
          </div>
          <div>
            <Typography className="break-words" variant="body">{productName}</Typography>
            <ProductPrice
              currentPrice={currentPrice}
              originalPrice={originalPrice}
            />
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <ProductInformation productName={productName} currentPrice={currentPrice} originalPrice={originalPrice} imageUrl={imageUrl} quantity={quantity} {...props} />
      </DrawerContent>
    </Drawer>
  );
}

export default ProductCard;
