import React from "react";
import Typography from "../components/Typography";
import { ToggleGroup, ToggleGroupItem } from "../components/ToggleGroup";
import { Input } from "../components/Input";
import { SearchIcon } from "lucide-react";

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
        <div className="flex"></div>
      </section>
    </main>
  );
}

export default SearchPage;
