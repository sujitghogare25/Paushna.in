import { useEffect, useState } from "react";
import axios from "../../api/axios";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/admin/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <>
      <AdminNavbar />
      <h1>All Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <p>
            Order #{order.id} - ${order.total} - Status: {order.status}
          </p>
        </div>
      ))}
    </>
  );
}
