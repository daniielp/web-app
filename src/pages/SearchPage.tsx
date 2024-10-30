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
  "Mejeri",
  "Frugt & Grønt",
  "Frost",
  "Brød",
  "None Food",
  "Snacks",
];

// Define keywords for each category
const categoryKeywords = {
  "Kød": [
    "kød", "hakket", "bøf", "mørbrad", "culotte", "flæsk", "kylling", "pølser", "bacon", "skinke", "frikadeller",
    "ribben", "oksekød", "svinekød", "lammekød", "kalvekød", "and", "vildt", "kalkun", "fars", "steak",
    "entrecote", "hjerte", "lever", "kotelet", "parmaskinke", "salami", "pepperoni", "pancetta", "spareribs",
    "oksehaler", "schnitzel", "gyros", "meatballs", "paté", "fjerkræ", "tatar", "pulled pork", "oksefilet"
  ],
  "Fisk": ["fisk", "laks", "tun", "reje", "torsk", "sild", "makrel", "ørred", "krabbe", "blæksprutte"],
  "Mejeri": ["mælk", "ost", "yoghurt", "skyr", "fløde", "smør", "cremefraiche", "hytteost", "kefir", "kvark"],
  "Frugt & Grønt": ["æble", "banan", "tomat", "agurk", "salat", "løg", "kartoffel", "citron", "appelsin", "peberfrugt", "broccoli", "spinat", "jordbær", "gulerod", "vindrue", "pære", "blomkål", "avocado", "kiwi", "melon",
  "fersken", "blomme", "mango", "nektarin", "squash", "aubergine", "hvidløg", "porre", "radise",
  "rødbede", "selleri", "majs", "ananas", "lime", "hindbær", "brombær", "granatæble", "cantaloupe", 
  "honningmelon", "cherrytomat", "fennikel", "ærter", "champignon", "græskar", "rucola", "persille", 
  "dild", "koriander", "forårsløg", "clementin", "rosenkål", "kokosnød", "kirsebær", "tranebær"],
  "Frost": ["frost", "frossen", "is", "pizza", "færdigret", "pommes", "grøntsagsblanding", "bær", "fiskefileter"],
  "Brød": ["brød", "rugbrød", "boller", "kage", "croissant", "baguette", "toast", "knækbrød", "pitabrød"],
  "None Food": ["shampoo", "sæbe", "tandbørste", "rengøring", "vaskemiddel", "toiletpapir", "køkkenrulle", "deodorant", "barberskum"],
  "Snacks": ["chips", "chokolade", "slik", "nødder", "popcorn", "kiks", "lakrids", "vingummi", "mandler"]
};

// Function to determine product category based on description
function determineCategory(description: string): string {
  // Convert description to lowercase for case-insensitive matching
  const lowerDesc = description.toLowerCase();
  
  // Check each category's keywords
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => lowerDesc.includes(keyword))) {
      return category;
    }
  }
  
  // If no category matches, return empty string
  return "";
}

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
            {p.clearances.map(({ offer, product }) => (
              <ProductCard
                key={product.description}
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