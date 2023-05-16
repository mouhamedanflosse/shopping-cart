import { Link } from "react-router-dom";
import { useContext } from "react";
import { productContext } from "./Context";
const Navbar = () => {
  const { productCart } = useContext(productContext)
  return (
    <div className="navBar">
      <div className="container">
        <div className="navgation">
          <Link to="/">
            <h3>home</h3>
          </Link>
          <Link to="cart">
            <h4><i className="bi bi-cart-check  "></i>({productCart.length})</h4>
          </Link>
        </div>
        <h3> React shopping cart</h3>
      </div>
    </div>
  );
};

export default Navbar;
