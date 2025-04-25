import { useEffect } from "react";
import { getUserFromLocalStorage, isValidToken } from "../../utils/user";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (!isValidToken(user.token)) {
      navigate("/login-page", { replace: true });
      return;
    }
  });

  return (
    <div>
      <h1>Cart Page</h1>
    </div>
  );
};

export default CartPage;
