import { useLocation, useParams } from 'react-router-dom';
import Typography from "../components/Typography";
import ProductCard, { ProductCardProps } from "../components/Product/ProductCard";
import ShopCard from "../components/Store/ShopCard";
import MissingProduct from "../components/Product/MissingProduct";

// Define category labels
const categories = ["Kød", "Mejeri", "Fisk", "Frugt & Grønt", "Frost", "Brød", "None Food", "Snacks"];

// Example category keywords (for filtering if needed)
const categoryKeywords = {
  "Kød": [
    "kød", "hakket", "bøf", "mørbrad", "culotte", "flæsk", "kylling", "pølser", "bacon", "skinke", "frikadeller",
    "ribben", "oksekød", "svinekød", "lammekød", "kalvekød", "and", "vildt", "kalkun", "fars", "steak",
    "entrecote", "hjerte", "lever", "kotelet", "parmaskinke", "salami", "pepperoni", "pancetta", "spareribs",
    "oksehaler", "schnitzel", "gyros", "meatballs", "paté", "fjerkræ", "tatar", "pulled pork", "oksefilet"
  ],
  "Fisk": ["fisk", "laks", "tun", "reje", "torsk", "sild", "makrel", "ørred", "krabbe", "blæksprutte", "rogn"],
  "Mejeri": ["mælk", "ost", "yoghurt", "skyr", "fløde", "smør", "cremefraiche", "hytteost", "kefir", "kvark"],
  "Frugt & Grønt": ["æble", "banan", "tomat", "agurk", "salat", "løg", "kartoffel", "citron", "appelsin", "peberfrugt", "broccoli", "spinat", "jordbær", "gulerod", "vindrue", "pære", "blomkål", "avocado", "kiwi", "melon",
  "fersken", "blomme", "mango", "nektarin", "squash", "aubergine", "hvidløg", "porre", "radise",
  "rødbede", "selleri", "majs", "ananas", "lime", "hindbær", "brombær", "granatæble", "cantaloupe", 
  "honningmelon", "cherrytomat", "fennikel", "ærter", "champignon", "græskar", "rucola", "persille", 
  "dild", "koriander", "forårsløg", "clementin", "rosenkål", "kokosnød", "kirsebær", "tranebær"],
  "Frost": ["frost", "frossen", "is", "pizza", "færdigret", "pommes", "grøntsagsblanding", "bær", "fiskefileter"],
  "Brød": ["brød", "rugbrød", "boller", "kage", "croissant", "baguette", "toast", "knækbrød", "pitabrød", "sandwich"],
  "None Food": ["shampoo", "sæbe", "tandbørste", "rengøring", "vaskemiddel", "toiletpapir", "køkkenrulle", "deodorant", "barberskum"],
  "Snacks": ["chips", "chokolade", "slik", "nødder", "popcorn", "kiks", "lakrids", "vingummi", "mandler"]
};

// Utility function to determine category
const determineCategory = (description: string) => {
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => description.toLowerCase().includes(keyword))) {
      return category;
    }
  }
  return "Unknown";
};

function StorePage() {
  const { state } = useLocation();
  const { id } = useParams();

  // Extract the state variables or use fallbacks
  const {
    shopName = "Rema1000",
    address = id,
    opensAt = "7:30",
    closesAt = "20:00",
    logoUrl,
    products = []
  } = state || {};

  // Group products by category
  const categorizedProducts = categories.reduce<Record<string, ProductCardProps[]>>((acc, category) => {
    acc[category] = products.filter((product: ProductCardProps) => 
      determineCategory(product.productName) === category
    );
    return acc;
  }, {});

  return (
    <main>
      <ShopCard
        className="rounded-none min-h-40"
        shopName={shopName}
        shopAddress={address}
        opensAt={opensAt}
        closesAt={closesAt}
        showBackButten={true}
        showFavoritButten={true}
      />

      {categories.map((category) => (
        <section key={category} className="px-6 py-8">
          <Typography variant="heading">{category}</Typography>
          <div className="flex overflow-x-auto gap-2">
            {categorizedProducts[category].length > 0 ? (
              categorizedProducts[category].map((product) => (
                <ProductCard
                  key={product.productName}
                  className="flex-shrink-0"
                  {...product}
                />
              ))
            ) : (
              <MissingProduct />
            )}
          </div>
        </section>
      ))}
    </main>
  );
}

export default StorePage;

/*
 import { useLocation, useParams } from 'react-router-dom';
import Typography from "../components/Typography";
import ProductCard, { ProductCardProps } from "../components/Product/ProductCard";
import StoreCard from "../components/Store/StoreCard";
import MissingProduct from "../components/Product/MissingProduct";
import { JSX } from 'react/jsx-runtime';

const categories = ["Kød", "Mejeri", "Fisk", "Frugt & Grønt", "Frost", "Brød", "None Food", "Snacks"];

const categoryKeywords = {
  "Kød": [
    "kød", "hakket", "bøf", "mørbrad", "culotte", "flæsk", "kylling", "pølser", "bacon", "skinke", "frikadeller",
    "ribben", "oksekød", "svinekød", "lammekød", "kalvekød", "and", "vildt", "kalkun", "fars", "steak",
    "entrecote", "hjerte", "lever", "kotelet", "parmaskinke", "salami", "pepperoni", "pancetta", "spareribs",
    "oksehaler", "schnitzel", "gyros", "meatballs", "paté", "fjerkræ", "tatar", "pulled pork", "oksefilet"
  ],
  "Fisk": ["fisk", "laks", "tun", "reje", "torsk", "sild", "makrel", "ørred", "krabbe", "blæksprutte", "rogn"],
  "Mejeri": ["mælk", "ost", "yoghurt", "skyr", "fløde", "smør", "cremefraiche", "hytteost", "kefir", "kvark"],
  "Frugt & Grønt": ["æble", "banan", "tomat", "agurk", "salat", "løg", "kartoffel", "citron", "appelsin", "peberfrugt", "broccoli", "spinat", "jordbær", "gulerod", "vindrue", "pære", "blomkål", "avocado", "kiwi", "melon",
  "fersken", "blomme", "mango", "nektarin", "squash", "aubergine", "hvidløg", "porre", "radise",
  "rødbede", "selleri", "majs", "ananas", "lime", "hindbær", "brombær", "granatæble", "cantaloupe", 
  "honningmelon", "cherrytomat", "fennikel", "ærter", "champignon", "græskar", "rucola", "persille", 
  "dild", "koriander", "forårsløg", "clementin", "rosenkål", "kokosnød", "kirsebær", "tranebær"],
  "Frost": ["frost", "frossen", "is", "pizza", "færdigret", "pommes", "grøntsagsblanding", "bær", "fiskefileter"],
  "Brød": ["brød", "rugbrød", "boller", "kage", "croissant", "baguette", "toast", "knækbrød", "pitabrød", "sandwich"],
  "None Food": ["shampoo", "sæbe", "tandbørste", "rengøring", "vaskemiddel", "toiletpapir", "køkkenrulle", "deodorant", "barberskum"],
  "Snacks": ["chips", "chokolade", "slik", "nødder", "popcorn", "kiks", "lakrids", "vingummi", "mandler"]
};

// Utility function to determine category
const determineCategory = (description: string) => {
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => description.toLowerCase().includes(keyword))) {
      return category;
    }
  }
  return "Unknown";
};

function StorePage() {
  const { state } = useLocation();
  const { id } = useParams();

  // Extract the state variables or use fallbacks
  const {
    shopName = "Rema1000",
    address = id,
    opensAt = "7:30",
    closesAt = "20:00",
    logoUrl,
    products = [],n
  } = state || {};

  // Group products by category
  const categorizedProducts = categories.reduce((acc, category) => {
    acc[category] = products.filter((product: { productName: string; }) => determineCategory(product.productName) === category);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <main>
      <StoreCard
        shopName={shopName}
        address={address}
        opensAt={opensAt}
        closesAt={closesAt}
        showBackButton={true}
        showFavoritButton={true}
      />
      {categories.map((category) => (
        <section key={category} className="px-6 py-8">
          <Typography variant="heading">{category}</Typography>
          <div className="flex overflow-x-auto gap-2">
            {categorizedProducts[category].length > 0 ? (
              categorizedProducts[category].map((product) => (
                <ProductCard
                  key={product.productName}
                  className="flex-shrink-0"
                  {...product}
                />
              ))
            ) : (
              <MissingProduct />
            )}
          </div>
        </section>
      ))}
    </main>
  );
}

export default StorePage; 



/*
import { useLocation, useParams } from 'react-router-dom';
import Typography from "../components/Typography";
import ProductCard from "../components/Product/ProductCard";
import ShopCard from "../components/Store/ShopCard";
import MissingProduct from "../components/Product/MissingProduct";

function StorePage() {
  const { state } = useLocation();
  const { id } = useParams();

  // If we have state from the navigation, use it
  const {
    shopName = "Rema1000", // fallback values if navigating directly to the page
    address = id,
    opensAt = "7:30",
    closesAt = "20:00",
    logoUrl,
    products = []
  } = state || {};

  return (
    <main>
      <ShopCard
        className="rounded-none min-h-40"
        shopName={shopName}
        address={address}
        opensAt={opensAt}
        closesAt={closesAt}
        showBackButten={true}
        showFavoritButten={true}
      />
      <section className="px-6 py-8">
        <Typography variant="heading">Varer</Typography>
        <div className="flex overflow-x-auto gap-2">
          {products.map((product) => (
            <ProductCard
              key={product.productName}
              className="flex-shrink-0"
              {...product}
            />
          ))}
          {products.length === 0 && <MissingProduct />}
        </div>
      </section>
    </main>
  );
}

export default StorePage; */