
import React from "react";
import Typography from "../Typography";
import { cn } from "../../lib/utils";
import StoreFavorit from "./StoreFavorit";
import ProductCard, { ProductCardProps } from "../Product/ProductCard";

interface ShopCard {
  shopName: string; // Netto
  address: string; //  Frederiks allé
  opensAt: string; // 8:30
  closesAt: string; // 20:30
  logoUrl?: string; //https://cdn.sallinggroup.com/
  products: ProductCardProps[];
  showAmountOnly: boolean; // True - Shows the tekst "10 datovarer tilføjet"
}

function StorePage({
  shopName,
  address,
  opensAt,
  closesAt,
  logoUrl,
  products,
  showAmountOnly,
}: ShopCard) {
  return (
    <section className="shopCardContainer">
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
            <Typography variant="body">Åben fra <span>{opensAt}</span> til <span>{closesAt}</span></Typography>
          </div>
        </div>
        <div>
          <StoreFavorit></StoreFavorit>
        </div>
      </header>
      <main className="shopCardMain">
        <div className="flex overflow-x-auto gap-4 shopCardMainContainer">
          <ProductCard
            productName="Kylling"
            currentPrice={22.5}
            originalPrice={25}
            quantity={10}
            imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          />
          <ProductCard
            productName="Kylling"
            currentPrice={22.5}
            originalPrice={25}
            quantity={10}
            imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          />
          <ProductCard
            productName="Kylling"
            currentPrice={22.5}
            originalPrice={25}
            quantity={10}
            imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          />
        </div>
      </main>
    </section>
  );
}

export default StorePage;


/*
import React from "react";
import Typography from "../Typography";
import { cn } from "../../lib/utils";
import StoreFavorit from "../Store/StoreFavorit";
import ProductCard from "../Product/ProductCard";

interface Product {
  productName: string;
  currentPrice: number;
  originalPrice: number;
  quantity: number;
  imageUrl: string;
}

interface ShopCard {
  shopName: string; // Netto
  address: string; // Frederiks allé
  opensAt: string; // 8:30
  closesAt: string; // 20:30
  logoUrl?: string; // https://cdn.sallinggroup.com/
  products: Product[];
  showAmountOnly: boolean; // True - Shows the text "10 datovarer tilføjet"
}

function StorePage({
  shopName,
  address,
  opensAt,
  closesAt,
  logoUrl,
  products,
  showAmountOnly,
}: ShopCard) {
  return (
    <section className="shopCardContainer">
      <header className={cn("flex flex-row storeCardHeading")}>
        <div className={cn("w-[3rem] shopCardLogo")}>
          <img src={logoUrl || "default-logo-url.png"} alt="butik-logo" />
        </div>
        <div className={cn("flex flex-col")}>
          <div className={cn("flex flex-row gap-1 shopInfo")}>
            <Typography variant="heading">{shopName}</Typography>
            <Typography variant="subHeading">{address}</Typography>
          </div>
          <div className={cn("flex flex-row gap-1")}>
            <Typography variant="font-normal">Åben fra</Typography>
            <Typography variant="font-normal">{opensAt}</Typography>
            <Typography variant="font-normal">til</Typography>
            <Typography variant="font-normal">{closesAt}</Typography>
          </div>
        </div>
        <div>
          <StoreFavorit />
        </div>
      </header>
      <main className="shopCardMain">
        <div className="flex overflow-x-auto gap-4 shopCardMainContainer">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productName={product.productName}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              quantity={product.quantity}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
        {showAmountOnly && <Typography variant="font-normal">{`${products.length} datovarer tilføjet`}</Typography>}
      </main>
    </section>
  );
}

export default StorePage;

*/