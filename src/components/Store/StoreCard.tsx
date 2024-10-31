import Typography from "../Typography";
import { cn } from "../../lib/utils";
import StoreFavorit from "./StoreFavorit";
import ProductCard, { ProductCardProps } from "../Product/ProductCard";
import { Link } from "react-router-dom";
import { SallingResponse } from "../../lib/types";
import { useStore } from "../../stores/useStore";

interface ShopCard {
  store: SallingResponse[number]["store"]
  
  logoUrl?: string; //https://cdn.sallinggroup.com/
  products: SallingResponse[number]["clearances"];
  showAmountOnly: boolean; // True - Shows the tekst "10 datovarer tilføjet"
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

function StoreCard({
  store,
  products,
  showAmountOnly,
  isFavorite,
  onToggleFavorite,
}: ShopCard) {
  const { setCurrentStore, setProducts} = useStore()

  return (
    <section className="shopCardContainer">
      <header className={cn("flex flex-row relative storeCardHeading")}>
        <Link
          className="absolute inset-0"
          onClick={() => {
            setCurrentStore(store)
            setProducts(products)
          }}
          to={{
            pathname: `/store/${encodeURIComponent(store.brand)}`,
          }}
        >
          <span className="sr-only">{store.brand}</span>{" "}
        </Link>
        <div className={cn("w-[3rem] shopCardLogo")}>
          <img src={""} alt="butik-logo" />
        </div>
        <div className={cn("flex flex-col")}>
          <div className={cn("flex flex-row gap-1 shopInfo ")}>
            <Typography variant="heading">{store.brand}</Typography>
            <Typography variant="subHeading">{store.address.street}</Typography>
          </div>
          <div>
            <Typography variant="body">
              Åben fra <span>{""}</span> til <span>{""}</span>
            </Typography>
          </div>
        </div>
        <div>
          <StoreFavorit
            isFavorite={isFavorite}
            onToggle={onToggleFavorite}
          ></StoreFavorit>
        </div>
      </header>
      <main className="shopCardMain">
        <div className="flex overflow-x-auto gap-4 p-2">
          {!showAmountOnly &&
            products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.product.ean} product={product} />
            ))}
          {showAmountOnly && products.length > 0 && (
            <div className="flex p-4">
              <Typography variant="subHeading">
                {products.length}{" "}
                <span className="font-normal">datovarer tilføjet</span>
              </Typography>
            </div>
          )}
        </div>
      </main>
    </section>
  );
}

export default StoreCard;
