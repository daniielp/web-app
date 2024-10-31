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
      <div className="slideshow-container relative">
        {products.length > 0 && (
          <Link
            className="block"
            to={`/store/${products[currentIndex].store.brand}`}
            onClick={() => {
              setStoreProducts(products[currentIndex].clearances);
              setCurrentStore(products[currentIndex].store);
            }}
          >
            <ShopCard
              shopName={products[currentIndex].store.brand}
              shopAddress={products[currentIndex].store.address.street}
              opensAt={"12:00"}
              closesAt={"24:00"}
            />
          </Link>
        )}

        <div className="dot-container">
          <div className="dot-navigation flex justify-center gap-2">
            {products.map((_, index) => (
              <span
                key={index}
                className={`dot inline-block w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex === index ? "bg-primary-dark" : "#14B7A5"
                }`}
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
