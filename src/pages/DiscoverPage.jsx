import React, { useState } from "react";
import Typography from "../components/Typography";
import ShopCard from "../components/Store/ShopCard";
import ProductCard from "../components/Product/ProductCard";

function DiscoverPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const shops = [
    {
      name: "Netto",
      address: "Frederiks allé",
      opensAt: "07:30",
      closesAt: "20:30",
    },
    {
      name: "SuperBrugsen",
      address: "Hovedgaden",
      opensAt: "08:00",
      closesAt: "21:00",
    },
    { name: "Fakta", address: "Bredgade", opensAt: "07:00", closesAt: "22:00" },
  ];

  return (
    <div className="p-6 flex flex-col gap-4">
      <Typography variant="heading">Butikker nær dig</Typography>
      <div className="slideshow-container">
        <ShopCard
          shopName={shops[currentIndex].name}
          address={shops[currentIndex].address}
          opensAt={shops[currentIndex].opensAt}
          closesAt={shops[currentIndex].closesAt}
        />
        <div className="dot-container">
          <div className="dot-navigation">
            {shops.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <Typography variant="heading">Her sparer du mest</Typography>
      <div>
        <div className="flex overflow-x-auto gap-4">
          <ProductCard
            productName="Kylling"
            currentPrice={22.5}
            originalPrice={25}
            quantity={10}
            imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          />
          <ProductCard
            productName="Kylling"
            currentPrice={22.5}
            originalPrice={25}
            quantity={10}
            imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          />
          <ProductCard
            productName="Kylling"
            currentPrice={22.5}
            originalPrice={25}
            quantity={10}
            imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          />
        </div>
      </div>

      <div className="bg-primary-dark text-white min-h-32 w-full flex flex-row justify-center items-center gap-1 p-2 rounded-2xl my-6">
      <Typography variant="heading">Gør</Typography>
      <img className="w-20" src="/kaal.png" alt="Kål" />
      <Typography variant="heading">på madspild!</Typography>
      </div>
    </div>
  );
}

export default DiscoverPage;
