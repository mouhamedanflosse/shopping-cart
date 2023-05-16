import { useContext } from "react";
import { productContext } from "./Context";
const ProductItem = () => {
  const { products, addToShoppingCart } = useContext(productContext);
  return (
    <div className="container">
      {products.length >= 1 ? (
        products.map((prod) => (
          <div key={prod.id} className="card">
            <div className="img">
              <img src={prod.urlimg} alt="shoes" />
            </div>
            <div className="text">
              <h3>{prod.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora, adipisci. Illum odit minus ex ipsum tempore atque
                dolorum reiciendis expedita molestiae, perspiciatis quod?
              </p>
            </div>
            <span className="price">{prod.price}</span>
            <button onClick={() => addToShoppingCart(prod)}>
              <i className="bi bi-cart-check"></i>Add to cart
            </button>
          </div>
        ))
      ) : (
        <h1>there's no result... </h1>
      )}
    </div>
  );
};

export default ProductItem;
