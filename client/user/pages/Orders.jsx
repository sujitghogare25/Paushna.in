import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Navbar from "../components/Navbar";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/orders/user/1").then((res) => setOrders(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <h1>Your Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <p>
            Order #{order.id} - ${order.total}
          </p>
        </div>
      ))}
    </>
  );
}
