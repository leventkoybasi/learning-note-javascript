export default function ProductCardBtn({ productId, handleProductSelect }) {
  return (
    <>
      <button
        className="outline"
        onClick={() => handleProductSelect(productId)}
      >
        SEC - {productId}
      </button>
    </>
  );
}
