import Typography from "../Typography";
import { cn, getLogoUrl } from "../../lib/utils";
import StoreFavorit from "./StoreFavorit";
import ProductCard, { ProductCardProps } from "../Product/ProductCard";
import { Link } from "react-router-dom";
import { SallingResponse } from "../../lib/types";
import { useStore } from "../../stores/useStore";

interface ShopCard {
  store: SallingResponse[number]["store"];

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
  const { setCurrentStore, setProducts } = useStore();

  return (
    <section className="shopCardContainer">
      <header className="flex flex-row relative  storeCardHeading">
        <Link
          className="flex flex-row relative gap-2 storeCardHeading"
          onClick={() => {
            setCurrentStore(store);
            setProducts(products);
          }}
          to={{
            pathname: `/store/${encodeURIComponent(store.brand)}`,
          }}
        >
          <div className={cn("w-[3rem] shopCardLogo")}>
            <img src={getLogoUrl(store.brand)} alt="butik-logo" />
          </div>
          <div className={cn("flex flex-col")}>
            <div className="flex flex-row gap-1 flex-wrap items-center">
              <Typography className="first-letter:capitalize" variant="heading">{store.brand}</Typography>
              <Typography className="font-normal" variant="subHeading">
                - {store.address.street}
              </Typography>
            </div>

            <Typography className="text-left" variant="body">
              Åben fra <span>{"8:00"}</span> til <span>{"22:00"}</span>
            </Typography>
          </div>
        </Link>
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
