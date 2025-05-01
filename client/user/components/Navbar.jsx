import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "1rem" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
    </nav>
  );
}
