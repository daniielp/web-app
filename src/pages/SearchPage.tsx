import React, { useEffect, useState } from "react";
import Typography from "../components/Typography";
import { ToggleGroup, ToggleGroupItem } from "../components/ToggleGroup";
import { Input } from "../components/Input";
import { SearchIcon } from "lucide-react";
import ProductCard from "../components/Product/ProductCard";
import { SallingResponse } from "../lib/types";
import { getProducts } from "../lib/api/salling";
import { categoryKeywords } from "../lib/keywords/category-keywords";
import { determineCategory } from "../lib/utils";

const filters = [
  "Alle",
  "Kød",
  "Fisk",
  "Mejeri",
  "Frugt & Grønt",
  "Frost",
  "Brød",
  "None Food",
  "Snacks",
];


function SearchPage() {
  const [products, setProducts] = useState<SallingResponse>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<SallingResponse>([]);
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  useEffect(() => {
    (async function () {
      try {
        const res = await getProducts();
        setProducts(res || []); 
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); 
      }
    })();
  }, []);

  useEffect(() => {
    if (!Array.isArray(products)) return;

    let filtered = products;

    // Filter by category first (if not "Alle")
    if (selectedCategory !== "Alle") {
      filtered = filtered.map(store => ({
        ...store,
        clearances: store.clearances.filter(({ product }) => 
          determineCategory(product.description) === selectedCategory
        )
      })).filter(store => store.clearances.length > 0);
    }

    // Then apply search filter
    if (searchQuery) {
      filtered = filtered.map(store => ({
        ...store,
        clearances: store.clearances.filter(({ product }) =>
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(store => store.clearances.length > 0);
    }

    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSelectedCategory("Alle");
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <main>
      <div className="flex flex-col px-6 gap-2">
        <div className="flex-1 relative">
          <SearchIcon className="absolute top-2 left-2 pointer-events-none text-primary" />
          <Input 
            className="pl-8" 
            placeholder="Søg efter varer..." 
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <ToggleGroup
          className="grid grid-cols-3 gap-2"
          type="single"
          defaultValue={filters[0]}
          onValueChange={handleCategoryChange}
        >
          {filters.map((item, index) => (
            <ToggleGroupItem key={item + index} value={item}>{item}</ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      {Array.isArray(filteredProducts) && filteredProducts?.map((p, index) => (
        <section key={p.store.brand + index} className="px-6 py-4">
          <Typography className="first-letter:uppercase" variant="heading">
            {p.store.brand}{" "}
            <span className="font-normal">- {p.store.address.street}</span>
          </Typography>
          <div className="flex overflow-x-auto gap-2">
            {p.clearances.map((p) => (
              <ProductCard
                key={p.product.ean}
                product={p}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default SearchPage;