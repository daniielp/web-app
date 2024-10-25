import Typography from "../components/Typography";
import ProductCard from "../components/Product/ProductCard";
import ShopCard from "../components/Store/ShopCard";
import MissingProduct from "../components/Product/MissingProduct";

function StorePage() {
  return (
    <main>
      <ShopCard
        className="rounded-none min-h-40"
        shopName="Rema1000"
        opensAt="7:30"
        closesAt="20:00"
        showBackButten={true}
        showFavoritButten={true}
      />
      <section className="px-6 py-8">
        <Typography variant="heading">Kød</Typography>
        <div className="flex overflow-x-auto gap-2">
          <ProductCard
            className="flex-shrink-0"
            productName="Kylling"
            currentPrice={22.5}
            originalPrice={25}
            quantity={5}
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
            quantity={15}
            imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          />
          <ProductCard
            productName="Kylling"
            currentPrice={22.5}
            originalPrice={25}
            quantity={1}
            imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          />
        </div>
      </section>
      <section className="px-6 py-8">
        <Typography variant="heading">Fisk</Typography>
        <div className="flex overflow-x-auto gap-2">
          <ProductCard
            className="flex-shrink-0"
            productName="Kylling"
            currentPrice={22.5}
            originalPrice={25}
            quantity={5}
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
            quantity={15}
            imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          />
          <ProductCard
            productName="Kylling"
            currentPrice={22.5}
            originalPrice={25}
            quantity={1}
            imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          />
        </div>
      </section>
      <div className="px-6 py-8 pb-24">
        <Typography variant="heading">Grønt</Typography>
        <MissingProduct />
      </div>
    </main>
  );
}

export default StorePage;
