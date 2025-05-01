import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Navbar from "../components/Navbar";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  const placeOrder = () => {
    const dummyOrder = {
      userId: 1,
      items: [{ productId: product.id, quantity: 1, price: product.price }],
      total: product.price,
    };
    axios.post("/orders", dummyOrder).then(() => alert("Order placed!"));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <h2>{product.name}</h2>
      <img src={product.image_url} width={200} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={placeOrder}>Buy Now</button>
    </>
  );
}
