import ProductCard from "../components/Product/ProductCard";
import ShopCard from "../components/Store/ShopCard";
import MissingProduct from "../components/Product/MissingProduct";
import { useStore } from "../stores/useStore";
import { categories } from "../lib/keywords/category-keywords";
import Typography from "../components/Typography";
import { determineCategory } from "../lib/utils";
import { useMemo } from "react";
/* Lavet af Jakob, Daniel, Anders */
function StorePage() {
  const { currentStore, products } = useStore();

  const categorizedProducts = categories.reduce((acc, category) => {
    acc[category] = products.filter(product => determineCategory(product.product.description) === category);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <main>
      <ShopCard
        className="rounded-none min-h-40"
        shopName={currentStore.name ?? "Rema1000"}
        shopAddress={currentStore.address?.street ?? "Smedegade 12"}
        opensAt={"8:00"}
        closesAt={"22:00"}
        showBackButten={true}
        showFavoritButten={true}
      />

      {categories.map((category) => (
        <section key={category} className="px-6 py-8">
          <Typography variant="heading">{category}</Typography>
          <div className="flex overflow-x-auto gap-2">
            {categorizedProducts[category].length > 0 ? (
              categorizedProducts[category].map((p) => (
                <ProductCard
                  key={p.product.ean}
                  className="flex-shrink-0"
                  product={p}
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
