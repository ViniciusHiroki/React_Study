import { useState } from "react";

const ManagerData = () => {
    const [number, setNumber] = useState(10);

    return(
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(15)}>Mudar variável</button>
        </div>
    )
}

export default ManagerData