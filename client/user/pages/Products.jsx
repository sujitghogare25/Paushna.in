import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <h1>All Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
