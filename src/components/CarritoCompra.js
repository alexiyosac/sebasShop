import { useState } from "react";

const CarritoCompra = ({contador}) => {
    const [count, setCount] = useState("")
    contador ? setCount(contador) : console.log("No hay valor para contador");

    return count;
}

export default CarritoCompra;