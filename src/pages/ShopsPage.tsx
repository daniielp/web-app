import { useState, useEffect } from "react";
import StoreCard from "../components/Store/StoreCard";
import EmptyFavorites from "../components/Store/EmptyFavorites";
import Typography from "../components/Typography";
import { getProducts } from "../lib/api/salling";
import { SallingResponse } from "../lib/types";
import { useFavoriteStores } from "../hooks/useFavoriteStores";

function ShopsPage() {
  const [products, setProducts] = useState<SallingResponse>([]);
  const [currentFavoriteIndex, setCurrentFavoriteIndex] = useState(0);
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

  const getLogoUrl = (shopName: string) => {
    switch (shopName.toLowerCase()) {
      case "netto":
        return "../netto-logo.png";
      case "bilka":
        return "../bilka-logo.png";
      case "foetex":
        return "../foetex-logo.png";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (currentFavoriteIndex >= favoriteStores.length && favoriteStores.length > 0) {
      setCurrentFavoriteIndex(favoriteStores.length - 1);
    }
  }, [favoriteStores.length]);

  return (
    <div className="p-6">
      <Typography variant="heading">Mine Butikker</Typography>
      <div className="slideshow-container relative">
        {(favoriteStores.length > 0 && favoriteStores[currentFavoriteIndex]) ? (
          <>
            <StoreCard
              key={favoriteStores[currentFavoriteIndex].store.address.street}
              store={favoriteStores[currentFavoriteIndex].store}
              logoUrl={getLogoUrl(favoriteStores[currentFavoriteIndex].store.brand)}
              showAmountOnly={true}
              isFavorite={isFavorite(favoriteStores[currentFavoriteIndex].store.address.street)}
              onToggleFavorite={() => toggleFavorite(favoriteStores[currentFavoriteIndex].store.address.street)}
              products={favoriteStores[currentFavoriteIndex].clearances}
            />
            
            {/* Dot navigation */}
            {favoriteStores.length > 1 && (
              <div className="dot-container mt-4">
                <div className="dot-navigation flex justify-center gap-2">
                  {favoriteStores.map((_, index) => (
                    <span
                      key={index}
                      className={`dot inline-block w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                        currentFavoriteIndex === index ? "bg-primary-dark" : "bg-[#14B7A5]"
                      }`}
                      onClick={() => setCurrentFavoriteIndex(index)}
                    ></span>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <EmptyFavorites />
        )}
      </div>

      <Typography variant="heading">Forslåede Butikker</Typography>
      {products?.map(({ store, clearances }) => (
        <StoreCard
          key={store.address.street}
          store={store}
          logoUrl={getLogoUrl(store.brand)}
          showAmountOnly={false}
          isFavorite={isFavorite(store.address.street)}
          onToggleFavorite={() => toggleFavorite(store.address.street)}
          products={clearances}
        />
      ))}
    </div>
  );
}

export default ShopsPage;