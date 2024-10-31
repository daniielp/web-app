import { useEffect, useState } from "react";
import Typography from "../components/Typography";
import ShopCard from "../components/Store/ShopCard";
import ProductCard from "../components/Product/ProductCard";
import { getProducts } from "../lib/api/salling";
import { SallingResponse } from "../lib/types";
import { Link } from "react-router-dom";
import { useStore } from "../stores/useStore";

export default function DiscoverPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<SallingResponse>([]);
  const { setCurrentStore, setProducts: setStoreProducts } = useStore();

  useEffect(() => {
    (async function () {
      const res = await getProducts();
      setProducts(res);
    })();
  }, []);

  return (
    <div className="p-6 flex flex-col gap-4">
      <Typography variant="heading">Butikker nær dig</Typography>
      <div className="slideshow-container">
        {products.map(({ store, clearances }) => (
          <Link
            to={`/store/${store.brand}`}
            onClick={() => {
              setStoreProducts(clearances);
              setCurrentStore(store);
            }}
          >
            <ShopCard
              shopName={store.brand}
              shopAddress={store.address.street}
              opensAt={"12:00"}
              closesAt={"24:00"}
            />
          </Link>
        ))}

        <div className="dot-container">
          <div className="dot-navigation">
            {products.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <Typography variant="heading">Her sparer du mest</Typography>
      <div>
        <div className="flex overflow-x-auto gap-4">
          {products[0]?.clearances.map((p) => 
            <ProductCard key={p.product.ean} product={p} />
          )}
        </div>
      </div>

      <div className="bg-primary-dark text-white min-h-32 w-full flex flex-row justify-center items-center gap-1 p-2 rounded-2xl my-6">
        <Typography variant="heading">Gør</Typography>
        <img className="w-20" src="/kaal.png" alt="Kål" />
        <Typography variant="heading">på madspild!</Typography>
      </div>
    </div>
  );
}
