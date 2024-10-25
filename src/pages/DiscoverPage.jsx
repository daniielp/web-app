import React, { useState } from "react";
import Typography from "../components/Typography";
import ShopCard from '../components/Store/ShopCard';

function DiscoverPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data for shops
  const shops = [
    { name: "Netto", address: "Frederiks allé", opensAt: "07:30", closesAt: "20:30" },
    { name: "SuperBrugsen", address: "Hovedgaden", opensAt: "08:00", closesAt: "21:00" },
    { name: "Fakta", address: "Bredgade", opensAt: "07:00", closesAt: "22:00" },
  ];

  return (
    <div>
      <Typography variant="heading">Butikker nær dig</Typography>
      <div className="slideshow-container">
        <ShopCard
          shopName={shops[currentIndex].name} // Fixed from shopName to name
          address={shops[currentIndex].address}
          opensAt={shops[currentIndex].opensAt}
          closesAt={shops[currentIndex].closesAt}
          // logoUrl={shops[currentIndex].logoUrl} // Uncomment if logoUrl is added to shops
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
    </div>
  );
}

export default DiscoverPage;