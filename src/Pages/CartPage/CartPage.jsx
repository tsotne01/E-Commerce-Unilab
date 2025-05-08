import { useContext, useEffect } from "react";
import { getUserFromLocalStorage, isValidToken } from "../../utils/user";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Services/Providers/CartContext";
import arrowRightGray from "../../assets/Icons/arrow-right-gray.svg";
import shirtImage from "../../assets/Images/shirt.png";
import deleteIcon from "../../assets/Icons/Delete-icon.svg";
import decrementIcon from "../../assets/Icons/Decrement-icon.svg";
import incrementIcon from "../../assets/Icons/Increment-icon.svg";

const CartPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (!user || !isValidToken(user.token)) {
      navigate("/login-page", { replace: true });
      return;
    }
  });
  const { cartItems, removeFromCart, setNumberOfItems } =
    useContext(CartContext);
  console.log(cartItems);
  return (
    <main className="max-w-[1440px] mx-auto">
      <div className="ml-6 pt-7 border-[#0000001A] mb-6 border-t-1 satoshi text-base flex items-center gap-x-3">
        <div className="flex gap-x-1">
          <span className="text-[#00000099]">Home</span>
          <img
            className="inline-block"
            src={arrowRightGray}
            alt="arrow right"
          />
        </div>
        <span className="text-black">Cart</span>
      </div>
      <div>
        <h2 className="integral-cf mb-6 font-extrabold text-[40px]">
          Your cart
        </h2>
        <div className="flex gap-x-5  ">
          {!cartItems && <span>Cart is empty !</span>}

          <div className=" rounded-[20px] px-5 py-6 border-1 border-[#0000001A]">
            {!!cartItems &&
              cartItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="border-b-1 mb-6 border-[#0000001A] min-w-3xl justify-between flex"
                  >
                    <div className="flex gap-x-3 mb-6">
                      <img
                        src={shirtImage}
                        className="w-32 h-32 rounded-xl"
                        alt="shirt"
                      />
                      <div>
                        <h3 className="satoshi text-[20px] mb-0.5">
                          {item.name}
                        </h3>
                        <span className="block mb-1">
                          Size: {item.sizes[0]}
                        </span>
                        <span className="block mb-3.5">
                          Color: {item.colors[0]}
                        </span>
                        <span className="block satoshi text-2xl font-bold">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between mb-6">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="self-end"
                        type="button"
                      >
                        <img src={deleteIcon} alt="delete icon" />
                      </button>
                      <div className="bg-[#F0F0F0]  p-3.5 rounded-[62px] flex items-center justify-between min-w-27 max-w-44 md:w-44 w-28">
                        <button
                          onClick={() =>
                            setNumberOfItems(item.id, item.numberOfItems - 1)
                          }
                          type="button"
                        >
                          <img src={decrementIcon} alt="decrement" />
                        </button>
                        <span>{item.numberOfItems}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setNumberOfItems(item.id, item.numberOfItems + 1)
                          }
                        >
                          {" "}
                          <img src={incrementIcon} alt="increment" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
