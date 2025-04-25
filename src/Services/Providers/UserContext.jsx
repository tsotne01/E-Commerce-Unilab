import { useState, createContext } from "react";
import { getUserFromLocalStorage, isValidUser } from "../../utils/user";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    const user = getUserFromLocalStorage(userData);
    if (isValidUser(user)) {
      setUser(user);
      return <Navigate to="/" replace />;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
