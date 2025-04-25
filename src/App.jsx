import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import { UserProvider } from "./Services/Providers/UserContext";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/signup-page" element={<SignUpPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route
          path="/cart"
          element={
            <UserProvider>
              <CartPage />
            </UserProvider>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
