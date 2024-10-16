import React, { useState, createContext, useContext } from "react";


const UserContext = createContext();
const UserProvider  = ({ children }) => {
  const [contador, setContador] = useState(0);
  const [array, setArray] = useState([{ id: 0, cantidad: 0, valor: 0, url: "" }]);

  return (
    <UserContext.Provider value={{ contador, array, setContador, setArray }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

