import React, { useState } from "react";
import ShopCard from "../components/Store/StoreCard";
import Typography from "../components/Typography";

const shops = [
  {
    shopName: "Netto",
    address: "Frederiks allé",
    opensAt: "07:30",
    closesAt: "20:30",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEifDxrzXF7R40fXctLHUfaqfVmVx0VExkA&s",
  },
  {
    shopName: "SuperBrugsen",
    address: "Nørregade",
    opensAt: "08:00",
    closesAt: "21:00",
    logoUrl: "https://example.com/superbrugsen-logo.png",
  },
  {
    shopName: "Føtex",
    address: "Vesterbrogade",
    opensAt: "08:00",
    closesAt: "22:00",
    logoUrl: "https://example.com/fotex-logo.png",
  },
];

function ShopsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="p-6">
      <Typography variant="heading">Mine Butikker</Typography>
      <div className="slideshow-container">
        <ShopCard
          shopName={shops[currentIndex].shopName}
          address={shops[currentIndex].address}
          opensAt={shops[currentIndex].opensAt}
          closesAt={shops[currentIndex].closesAt}
          logoUrl={shops[currentIndex].logoUrl}
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
      <Typography variant="heading">Forslåede Butikker</Typography>
      <ShopCard shopName="Netto" address="Frederiks allé" opensAt="07:30" closesAt="20:30" logoUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEifDxrzXF7R40fXctLHUfaqfVmVx0VExkA&s'></ShopCard>
    </div>
  );
}

export default ShopsPage;
