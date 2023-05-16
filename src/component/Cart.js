import { useContext } from "react";
import { productContext } from "./Context";
const Cart = () => {
  const { productCart, removeItem, increament, decreament } =
    useContext(productContext);
  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>Quantity</th>
            <th>price</th>
            <th>subTotal</th>
          </tr>
        </thead>
        <tbody>
          {productCart.map((pro) => (
            <tr key={pro.id}>
              <td>
                <img src={pro.urlimg} alt={pro.title} />
              </td>
              <td>
                <p>{pro.title}</p>
              </td>
              <td>
                <i
                  onClick={() => increament(pro)}
                  className="bi bi-caret-up"
                ></i>
                <span>{pro.quantity}</span>
                <i
                  onClick={() => decreament(pro)}
                  className="bi bi-caret-down"
                ></i>
              </td>
              <td>
                <p>{pro.price}</p>
              </td>
              <td>{parseInt(pro.price) * pro.quantity}$</td>
              <td>
                <p onClick={() => removeItem(pro)} className="remove">
                  {" "}
                  &times;
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <span>Total : </span>
        <span className="amount">
          {productCart.reduce(
            (acc, pro) => (acc += parseInt(pro.price) * pro.quantity),
            0
          )}
          $
        </span>
      </div>
    </div>
  );
};

export default Cart;
