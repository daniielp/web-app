import React from "react";
import Typography from "../Typography";

interface ShopCardProps {
  shopName: string;
  shopAddress?: string;
  opensAt: string;
  closesAt: string;
}

function ShopCard({ shopName, shopAddress, opensAt, closesAt }: ShopCardProps) {
  return (
    <div className="bg-primary-dark text-white min-h-32 w-full flex flex-col items-start justify-end p-4 rounded-2xl">
      <Typography variant="heading">
        {shopName}{" "}
        {shopAddress && (
          <span className="font-normal text-base">- {shopAddress}</span>
        )}
      </Typography>
      <Typography variant="body">
        Åben fra {opensAt} til {closesAt}
      </Typography>
    </div>
  );
}

export default ShopCard;
