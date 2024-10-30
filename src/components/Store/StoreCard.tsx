import { Link } from "react-router-dom";
import Typography from "../Typography";
import { cn } from "../../lib/utils";
import StoreFavorit from "./StoreFavorit";
import ProductCard, { ProductCardProps } from "../Product/ProductCard";

interface ShopCard {
  shopName: string;
  address: string;
  opensAt: string;
  closesAt: string;
  logoUrl?: string;
  products: ProductCardProps[];
  showAmountOnly: boolean;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

function StorePage({
  shopName,
  address,
  opensAt,
  closesAt,
  logoUrl,
  products,
  showAmountOnly,
  isFavorite,
  onToggleFavorite,
}: ShopCard) {
  return (
    <section className="shopCardContainer mb-8">
      <header className={cn("flex flex-row storeCardHeading")}>
        <div className={cn("w-[3rem] shopCardLogo")}>
        <Link
              to={{
                pathname: `/store/${encodeURIComponent(shopName)}`,
                state: {
                  shopName,
                  address,
                  opensAt,
                  closesAt,
                  logoUrl,
                  products,
                  showAmountOnly,
                  isFavorite,
                },
              }}
            >
          <img src={logoUrl} alt="butik-logo" />
          </Link>
        </div>
        <div className={cn("flex flex-col")}>
          <div className={cn("flex flex-row gap-1 shopInfo")}>
            <Link
              to={{
                pathname: `/store/${encodeURIComponent(shopName)}`,
                state: {
                  shopName,
                  address,
                  opensAt,
                  closesAt,
                  logoUrl,
                  products,
                  showAmountOnly,
                  isFavorite,
                },
              }}
            >
              <Typography variant="heading">{shopName}</Typography>
            </Link>
            <Link
              to={{
                pathname: `/store/${encodeURIComponent(shopName)}`,
                state: {
                  shopName,
                  address,
                  opensAt,
                  closesAt,
                  logoUrl,
                  products,
                  showAmountOnly,
                  isFavorite,
                },
              }}
            >
            <Typography variant="subHeading">{address}</Typography>
            </Link>
          </div>
          <div>
            <Typography variant="body">
              Åben fra <span>{opensAt}</span> til <span>{closesAt}</span>
            </Typography>
          </div>
        </div>
        <div>
          <StoreFavorit 
            isFavorite={isFavorite} 
            onToggle={onToggleFavorite}
          />
        </div>
      </header>
      <main className="shopCardMain">
        <div className="flex overflow-x-auto gap-4 p-2">
          {!showAmountOnly &&
            products.length > 0 &&
            products.map((product) => <ProductCard key={product.productName} {...product} />)}
          {showAmountOnly && products.length > 0 && (
            <div className="flex p-4">
              <Typography variant="subHeading">
                {products.length} <span className="font-normal">datovarer tilføjet</span> 
              </Typography>
            </div>
          )}
        </div>
      </main>
    </section>
  );
}

export default StorePage;



/* import React from "react";
import { Link } from "react-router-dom";
import Typography from "../Typography";
import { cn } from "../../lib/utils";
import StoreFavorit from "./StoreFavorit";
import ProductCard, { ProductCardProps } from "../Product/ProductCard";

interface ShopCard {
  shopName: string;
  address: string;
  opensAt: string;
  closesAt: string;
  logoUrl?: string;
  products: ProductCardProps[];
  showAmountOnly: boolean;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

function StoreCard({
  shopName,
  address,
  opensAt,
  closesAt,
  logoUrl,
  products,
  showAmountOnly,
  isFavorite,
  onToggleFavorite,
}: ShopCard) {
  return (
    <section className="shopCardContainer mb-8">
      <header className={cn("flex flex-row storeCardHeading")}>
        <div className={cn("w-[3rem] shopCardLogo")}>
          <img src={logoUrl} alt="butik-logo" />
        </div>
        <div className={cn("flex flex-col")}>
          <div className={cn("flex flex-row gap-1 shopInfo ")}>
            <Typography variant="heading">{shopName}</Typography>
            <Typography variant="subHeading">{address}</Typography>
          </div>
          <div>
            <Typography variant="body">
              Åben fra <span>{opensAt}</span> til <span>{closesAt}</span>
            </Typography>
          </div>
        </div>
        <div>
          <StoreFavorit 
            isFavorite={isFavorite} 
            onToggle={onToggleFavorite}
          />
        </div>
      </header>
      <main className="shopCardMain">
        <div className="flex overflow-x-auto gap-4 p-2">
          {!showAmountOnly &&
            products.length > 0 &&
            products.map((product) => <ProductCard key={product.productName} {...product} />)}
          {showAmountOnly && products.length > 0 && (
            <div className="flex p-4">
              <Typography variant="subHeading">
                {products.length} <span className="font-normal">datovarer tilføjet</span> 
              </Typography>
            </div>
          )}
        </div>
      </main>
    </section>
  );
}

export default StoreCard; */