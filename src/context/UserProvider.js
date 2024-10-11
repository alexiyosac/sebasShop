import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [contador, setContador] = useState (0);
    console.log("el valor de contador en context es.. ",contador);
   return <UserContext.Provider value={[contador, setContador]}>{children}</UserContext.Provider>;
};
