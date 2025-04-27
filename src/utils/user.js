export const getUser = (userData) => {
  const user = {
    email: userData.email,
    name: userData.name,
    token: userData.token,
  };
  return user;
};

export const getUserFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return null;
  return user;
};

export const setUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const isValidUser = (user) => {
  return user?.token && user?.token.length > 0;
};

export const isValidToken = (token) => {
  return token && token.length > 0;
};

export const generateToken = () => {
  const token =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return token;
};
