import { useState, useEffect } from "react";
import ShopCard from "../components/Store/StoreCard";
import Typography from "../components/Typography";
import { getProducts } from "../lib/api/salling";
import { SallingResponse } from "../lib/types";

function ShopsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<SallingResponse>([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await getProducts();
        setProducts(res || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    })();
  }, []);

  return (
    <div className="p-6">
      <Typography variant="heading">Mine Butikker</Typography>
      <div className="slideshow-container">
        {products.slice(0, 3).map(({ store, clearances }) => (
          <>
            <ShopCard
              shopName={store.brand}
              address={store.address.street}
              opensAt="07:30"
              closesAt="20:30"
              logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEifDxrzXF7R40fXctLHUfaqfVmVx0VExkA&s"
              showAmountOnly={true}
              products={clearances.map(({ offer, product }) => ({
                productName: product.description,
                imageUrl: product.image ?? "",
                originalPrice: offer.originalPrice,
                currentPrice: offer.newPrice,
                quantity: offer.stock,
              }))}
            />
            {/* <div className="dot-container">
              <div className="dot-navigation">
                {store.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
              </div>
            </div> */}
          </>
        ))}
      </div>
      <Typography variant="heading">Forslåede Butikker</Typography>
      {products?.map((p) => (
        <ShopCard
          shopName={p.store.brand}
          address={p.store.address.street}
          opensAt="07:30"
          closesAt="20:30"
          logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEifDxrzXF7R40fXctLHUfaqfVmVx0VExkA&s"
          showAmountOnly={false}
          products={p.clearances.map(({ offer, product }) => ({
            productName: product.description,
            imageUrl: product.image ?? "",
            originalPrice: offer.originalPrice,
            currentPrice: offer.newPrice,
            quantity: offer.stock,
          }))}
        />
      ))}
    </div>
  );
}

export default ShopsPage;
