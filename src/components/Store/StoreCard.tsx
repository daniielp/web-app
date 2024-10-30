/*
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
            <Typography variant="body">
              Åben fra <span>{opensAt}</span> til <span>{closesAt}</span>
            </Typography>
          </div>
        </div>
        <div>
          <StoreFavorit></StoreFavorit>
        </div>
      </header>
      <main className="shopCardMain">
        <div className="flex overflow-x-auto gap-4 p-2">
          {!showAmountOnly &&
            products.length > 0 &&
            products.map((product) => <ProductCard {...product} />)}
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
*/

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