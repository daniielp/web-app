/*
import { useState, useEffect } from "react";
import StoreCard from "../components/Store/StoreCard";
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
            <StoreCard
              key={store.address.street}
              shopName={store.brand}
              address={store.address.street}
              opensAt="07:30"
              closesAt="20:30"
              logoUrl="../netto-logo.png"
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
        <StoreCard
          key={store.address.street}
          shopName={store.brand}
          address={store.address.street}
          opensAt="07:30"
          closesAt="20:30"
          logoUrl="../bilka-logo.png"
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

*/

import { useState, useEffect } from "react";
import StoreCard from "../components/Store/StoreCard";
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

  const favoriteStores = products.filter(({ store }) => 
    favorites.includes(store.address.street)
  );

  // Function to get the logo URL based on the shop name
  const getLogoUrl = (shopName: string) => {
    switch (shopName.toLowerCase()) {
      case "netto":
        return "../netto-logo.png";
      case "bilka":
        return "../bilka-logo.png";
      case "foetex":
        return "../foetex-logo.png";
      default:
        return ""; // Default case if no match is found
    }
  };

  return (
    <div className="p-6">
      <Typography variant="heading">Mine Butikker</Typography>
      <div className="slideshow-container">
        {favoriteStores.length > 0 ? (
          favoriteStores.map(({ store, clearances }) => (
            <StoreCard
              key={store.address.street}
              shopName={store.brand}
              address={store.address.street}
              opensAt="07:30"
              closesAt="20:30"
              logoUrl={getLogoUrl(store.brand)} // Use the function to get the logo URL
              showAmountOnly={true}
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
          ))
        ) : (
          <EmptyFavorites />
        )}
      </div>
      <Typography variant="heading">Forslåede Butikker</Typography>
      {products?.map(({ store, clearances }) => (
        <StoreCard
          key={store.address.street}
          shopName={store.brand}
          address={store.address.street}
          opensAt="07:30"
          closesAt="20:30"
          logoUrl={getLogoUrl(store.brand)} // Use the function to get the logo URL
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