import { useCart } from "react-use-cart";
import sales from "./FlashSales/sales";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className="text-center"> Your cart is empty</h1>;

  return (
    <div className="w-full align-middle py-4">
      <h5 className="text-center text-2xl">
        Cart {totalUniqueItems} total items: {totalItems}
      </h5>
      <table className="flex justify-between px-16">
        <tbody className="w-full">
          {sales.map((item, idx) => {
            return (
              <tr key={idx} className="w-screen">
                <td className="w-32">
                  <img
                    src={item.image}
                    style={{ width: "6rem" }}
                    alt={item.describe}
                  />
                </td>
                <td className="w-60">{item.describe}</td>
                <td className="w-60">₦{item.price}</td>
                <td className="w-60"> Quantity ({item.quantity})</td>
                <td className="w-60 flex">
                  <div className="w-40">
                    <button
                      className="40"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button className="" onClick={() => removeItem(item.id)}>
                    ❌
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end px-16 py-4 gap-4 items-center">
        <div>
          <h2>Total price: {cartTotal}</h2>
        </div>
        <div>
          <button className="bg-red text-white px-4 py-2 rounded-md" onClick={() => emptyCart()}>
            Clear Cart
          </button>
        </div>
        <div><button className="bg-second text-white px-4 py-2 rounded-md">Buy Now</button></div>
      </div>
    </div>
  );
};

export default Cart;
