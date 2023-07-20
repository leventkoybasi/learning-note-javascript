import ProductCard from "./ProductCard";

export default function ImgContainer({ products, handleProductSelect }) {
  return (
    <div className="grid">
      {products
        .filter((product) => product.isAvailable)
        .map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            handleProductSelect={handleProductSelect}
          />
        ))}
    </div>
  );
}
