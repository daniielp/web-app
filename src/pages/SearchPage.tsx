import React, { useEffect, useState } from "react";
import Typography from "../components/Typography";
import { ToggleGroup, ToggleGroupItem } from "../components/ToggleGroup";
import { Input } from "../components/Input";
import { SearchIcon } from "lucide-react";
import ProductCard from "../components/Product/ProductCard";
import { SallingResponse } from "../lib/types";
import { getProducts } from "../lib/api/salling";

const filters = [
  "Alle",
  "Kød",
  "Fisk",
  "Majeri",
  "Frugt & Grønt",
  "Frost",
  "Brød",
  "None Food",
  "Snacks",
];

function SearchPage() {
  const [products, setProducts] = useState<SallingResponse | undefined>();

  useEffect(() => {
    (async function () {
      setProducts(await getProducts())
    })();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <main>
      <div className="flex flex-col px-6 gap-2">
        <div className="flex-1 relative">
          <SearchIcon className="absolute top-2 left-2 pointer-events-none text-primary" />
          <Input className="pl-8" placeholder="Søg efter varer..." />
        </div>
        <ToggleGroup
          className="grid grid-cols-3 gap-2"
          type="single"
          defaultValue={filters[0]}
        >
          {filters.map((item, index) => (
            <ToggleGroupItem value={item}>{item}</ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      {products?.map((p, index) => (
        <section key={p.store.brand + index} className="px-6 py-4">
          <Typography variant="heading">
            {p.store.brand}{" "}
            <span className="font-normal">- {p.store.address.street}</span>
          </Typography>
          <div className="flex overflow-x-auto gap-2">
            {p.clearances.map(({ offer, product }) => (
              <ProductCard
                productName={product.description}
                imageUrl={product.image ?? ""}
                originalPrice={offer.originalPrice}
                currentPrice={offer.newPrice}
                quantity={offer.stock}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default SearchPage;
