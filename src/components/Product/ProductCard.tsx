import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "../Drawer";
import ProductInformation from "./ProductInformation";
import { cn } from "../../lib/utils";
import ProductAmount from "./ProductAmount";
import Typography from "../Typography";
import ProductPrice from "./ProductPrice";
import { SallingResponse } from "../../lib/types";

export interface ProductCardProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  product: SallingResponse[number]["clearances"][number]
}

function ProductCard({
  product,
  className,
  ...props
}: ProductCardProps) {
  const imageUrl = (product.product.image?.endsWith("image") ? "/food-icon.svg" :  product.product.image ) ?? "/food-icon.svg"
  const quantity = product.offer.stock
  const productName = product.product.description
  const currentPrice = product.offer.newPrice
  const originalPrice = product.offer.originalPrice

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
        <ProductInformation product={product} {...props} />
      </DrawerContent>
    </Drawer>
  );
}

export default ProductCard;
