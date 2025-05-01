import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h3>{product.name}</h3>
      <img src={product.image_url} alt={product.name} width={150} />
      <p>{product.price} USD</p>
      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
}
