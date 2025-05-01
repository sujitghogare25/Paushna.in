import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import axios from "../../api/axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products").then((res) => setProducts(res.data.slice(0, 3)));
  }, []);

  return (
    <>
      <Navbar />
      <h1>Featured T-Shirts</h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link to="/products">See All Products</Link>
    </>
  );
}
