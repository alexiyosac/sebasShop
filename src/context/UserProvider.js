import React, { useState, createContext, useContext } from "react";

// export const UserContext = createContext(null);


// export const UserProvider = ({children}) => {
//     const [contador, setContador] = useState (0);

//     return <UserContext.Provider value={[contador, setContador]}>
//     {children}</UserContext.Provider>;
// };


// const UserContext = createContext({
//     cantCar: (cant) =>{},
//     totalCar: 0,
//     items: [],
//     createItem: (item) => {},
//     getItem: (id) => {},
//     updateItem: (item) => {},
// });


// export default function UserProvider ({children}) {
//     const [contador, setContador] = useState (0);    
//     const [items, setItems] = useState([]);

//     function cantCar (cant){
//        const totalCar =  setContador(cant); 
//         return totalCar;
//     }

//     // function totalCar(){
//     //     const totalCarrito = contador;
//     //     return totalCarrito;
//     // }

//     function createItem(item) {
//         const temp = [...items];
//         temp.push(item);
//         setItems(temp);
//     }

//     function getItem(id) {
//         const item = items.find(item.id === id);
//         return item;
//     }

//     function updateItem(item) {
//         const index = items.findIndex((i) => i.id === item.id);
//         const temp = [...items];
//         return temp[index];
//     }

//     return <UserContext.Provider value={{
//         cantCar,
//         totalCar,
//         items,
//         createItem,
//         getItem,
//         updateItem,
//       }}>
//     {children}</UserContext.Provider>;
// };

// export function useAppContext(){
//     return useContext(UserContext);
// }


const UserContext = createContext();
const UserProvider  = ({ children }) => {
  const [contador, setContador] = useState(0);
  const [objeto, setObjeto] = useState({ cantidad: 0, valor: 0 });

  return (
    <UserContext.Provider value={{ contador, objeto, setContador, setObjeto }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

