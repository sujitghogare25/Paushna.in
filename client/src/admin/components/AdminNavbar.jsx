import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "1rem" }}>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/orders">Orders</Link>
        </li>
      </ul>
    </nav>
  );
}
