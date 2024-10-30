import { useState, useEffect } from "react";
import StoreCard from "../components/Store/StoreCard"; // Changed here
import EmptyFavorites from "../components/Store/EmptyFavorites";
import Typography from "../components/Typography";
import { getProducts } from "../lib/api/salling";
import { SallingResponse } from "../lib/types";
import { useFavoriteStores } from "../hooks/useFavoriteStores";

function ShopsPage() {
  const [products, setProducts] = useState<SallingResponse>([]);
  const { favorites, toggleFavorite, isFavorite } = useFavoriteStores();

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

  // Get favorite stores using address as the identifier
  const favoriteStores = products.filter(({ store }) => 
    favorites.includes(store.address.street)
  );

  return (
    <div className="p-6">
      <Typography variant="heading">Mine Butikker</Typography>
      <div className="slideshow-container">
        {favoriteStores.length > 0 ? (
          favoriteStores.map(({ store, clearances }) => (
            <StoreCard // Changed here
              key={store.address.street}
              shopName={store.brand}
              address={store.address.street}
              opensAt="07:30"
              closesAt="20:30"
              logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEifDxrzXF7R40fXctLHUfaqfVmVx0VExkA&s"
              showAmountOnly={true}
              isFavorite={true}
              onToggleFavorite={() => toggleFavorite(store.address.street)}
              products={clearances.map(({ offer, product }) => ({
                productName: product.description,
                imageUrl: product.image ?? "",
                originalPrice: offer.originalPrice,
                currentPrice: offer.newPrice,
                quantity: offer.stock,
              }))}
            />
          ))
        ) : (
          <EmptyFavorites />
        )}
      </div>
      <Typography variant="heading">Forslåede Butikker</Typography>
      {products?.map(({ store, clearances }) => (
        <StoreCard // Changed here
          key={store.address.street}
          shopName={store.brand}
          address={store.address.street}
          opensAt="07:30"
          closesAt="20:30"
          logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEifDxrzXF7R40fXctLHUfaqfVmVx0VExkA&s"
          showAmountOnly={false}
          isFavorite={isFavorite(store.address.street)}
          onToggleFavorite={() => toggleFavorite(store.address.street)}
          products={clearances.map(({ offer, product }) => ({
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