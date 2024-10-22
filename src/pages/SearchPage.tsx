import React from "react";
import Typography from "../components/Typography";
import { ToggleGroup, ToggleGroupItem } from "../components/ToggleGroup";
import { Input } from "../components/Input";
import { SearchIcon } from "lucide-react";
import ProductCard from "../components/Product/ProductCard";

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
      <section className="px-6 py-8">
        <Typography variant="heading">
          Rema1000 <span className="font-normal">- Smedegade 12</span>
        </Typography>
        <div className="flex overflow-x-auto gap-2">
          <ProductCard className="flex-shrink-0" productName="Kylling" currentPrice={22.5} originalPrice={25} quantity={5} imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" />
          <ProductCard productName="Kylling" currentPrice={22.5} originalPrice={25} quantity={10} imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" />
          <ProductCard productName="Kylling" currentPrice={22.5} originalPrice={25} quantity={15} imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" />
          <ProductCard productName="Kylling" currentPrice={22.5} originalPrice={25} quantity={1} imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" />
        </div>
      </section>
    </main>
  );
}

export default SearchPage;
