export const getUser = (userData) => {
  const user = {
    email: userData.email,
    name: userData.name,
    token: userData.token,
  };
  return user;
};

export const getUserFromLocalStorage = async () => {
  const user = JSON.parse(await localStorage.getItem("user"));
  return user;
};

export const setUserToLocalStorage = async (user) => {
  await localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = async () => {
  await localStorage.removeItem("user");
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
