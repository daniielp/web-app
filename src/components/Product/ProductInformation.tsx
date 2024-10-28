import React from "react";
import type { ProductCardProps } from "./ProductCard";
import Typography from "../Typography";
import { cn } from "../../lib/utils";
import { ClockIcon, HourglassIcon, InfoIcon } from "lucide-react";
import ShopCard from "../Store/ShopCard";

function ProductInformation({
  productName,
  currentPrice,
  originalPrice,
  imageUrl,
  quantity,
}: ProductCardProps) {
  return (
    <div className="py-6">
      <div className="grid grid-cols-3 px-6 gap-4">
        <img
          className="rounded-lg col-span-1 h-full object-contain aspect-square"
          alt={productName}
          src={imageUrl}
        />
        <section className="col-span-2">
          <div className="py-2">
            <Typography className="font-normal first-letter:uppercase lowercase" variant="heading">
              {productName}
            </Typography>
            <div className={cn("flex gap-2 items-center")}>
              <Typography variant="heading">{currentPrice} kr</Typography>
              {originalPrice && (
                <Typography
                  variant="heading"
                  className="font-normal text-red-500 line-through"
                >
                  {originalPrice} kr
                </Typography>
              )}
            </div>
          </div>
          <div className="flex flex-col border-t border-gray-200 py-4">
            <dl className="flex justify-between items-center">
              <dt className="inline-flex items-center gap-1">
                <ClockIcon size={16} className="text-primary" /> Tilføjet
              </dt>
              <dd className="font-bold">23 sep kl. 12:27</dd>
            </dl>
            <dl className="flex justify-between items-center">
              <dt className="inline-flex items-center gap-1">
                <HourglassIcon size={16} className="text-primary" /> Bedst før
              </dt>
              <dd className="font-bold"> 24.09.2024</dd>
            </dl>
          </div>
        </section>
        <div className="flex col-span-3 gap-2">
          <InfoIcon size={52} className="h-full" />
          <Typography variant="caption">
            <span className="font-bold">OBS</span>: Vi kan desværre ikke
            garantere at varen stadig tilbydes nede i butikken, da vi ikke kan
            opdatere, hvis en kunde lige har købt varen.
          </Typography>
        </div>
        <div className="col-span-3">
          <Typography variant="subHeading">Fundet i følgende butik</Typography>
          <ShopCard
            shopName="Netto"
            shopAddress="Frijsenborgvej 5, 8240 Risskov"
            opensAt="7:30"
            closesAt="22:00"
          />
        </div>
        <div className="col-span-3">
          <Typography variant="subHeading">Opskrifter</Typography>
          <div className="bg-[#D4AA78] text-white min-h-32 w-full flex flex-col justify-center items-center gap-1 p-4 rounded-2xl">
            <Typography variant="caption">Valdemarsro</Typography>
            <Typography variant="heading">FÅ HJÆLP TIL MADEN</Typography>
            <a href="/#" className="bg-[#9A4A0B] p-2 py-1 rounded-lg" >Find opskrifter med råvareren</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInformation;
