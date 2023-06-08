import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState({
    name: "Darwin Salinas H",
    email: "salinash2000@gmail.com",
  });

  const [cart, setCart] = useState({
    totalItems: 0,
    items: [],
  });

  const greeting = () => {
    alert("hola");
  };

  const getTotalCart = () => {
    return cart.items.reduce((acc, item) => acc + item.price * item.amount, 0);
  };

  return (
    <AuthContext.Provider
      value={{
        // state
        user,
        cart,

        // functions
        setUser,
        greeting,
        setCart,
        getTotalCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
