import { createContext, useState } from "react";
import { product } from "../ProductList";
const productContext = createContext();
function ContextProvider({ children }) {
  const [products, setproduct] = useState(product);
  const [productCart, setcart] = useState([]);
  function filterBysearch(productName) {
    if (productName === "") {
      return setproduct(product);
    }
    setproduct(
      products.filter((prod) => {
        return prod.title === productName;
      })
    );
  }
  function addToShoppingCart(item) {
    const pro = product.find((ele) => ele.id === item.id);
    const cond = productCart.find((ele) => ele.id === pro.id);
    if (!cond) {
      pro.quantity = 1;
      setcart([...productCart, pro]);
    } else {
      pro.quantity += 1;
      setcart([...productCart]);
    }
  }
  function increament(item) {
    let pro = productCart.find((pro) => pro.id === item.id);
    if (pro) {
      pro.quantity += 1;
      setcart([...productCart]);
    }
  }
  function decreament(item) {
    let pro = productCart.find((pro) => pro.id === item.id);
    console.log(pro);
    if (pro && pro.quantity > 1) {
      pro.quantity -= 1;
      setcart([...productCart]);
    } else {
      setcart(productCart.filter((ele) => ele.id !== item.id));
    }
  }
  function removeItem(item) {
    setcart(productCart.filter((pro) => pro.id !== item.id));
  }
  return (
    <productContext.Provider
      value={{
        products,
        productCart,
        filterBysearch,
        addToShoppingCart,
        decreament,
        increament,
        removeItem,
      }}
    >
      {children}
    </productContext.Provider>
  );
}
export { ContextProvider, productContext };
