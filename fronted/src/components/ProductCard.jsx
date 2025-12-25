function ProductCard({ product, onDelete }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button
        className="delete-btn"
        onClick={() => onDelete(product.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ProductCard;
