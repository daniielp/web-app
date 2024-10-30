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

export default StorePage;