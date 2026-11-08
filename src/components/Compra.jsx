import { useState, useMemo } from "react";

function Compra() {
    const [cantidad, setCantidad] = useState(1);
    const [precio, setPrecio] = useState(25);
    const [nombre, setNombre] = useState("");

    const total = useMemo(() => {
        console.log("Calculando total...");
        return cantidad * precio
    }, [cantidad, precio]);

    return (
        <div>
            <h2>Calculadora de compra</h2>

            <input 
                type="text" 
                placeholder="Nombre del producto"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <p>Nombre: {nombre}</p>
            <p>Precio: ${precio}</p>
            <p>Cantidad: {cantidad}</p>
            <h3>Total: ${total}</h3>

            <button onClick={() => setCantidad(cantidad + 1)}>
                Agregar producto
            </button>

            <button onClick={() => setPrecio(precio + 5)}>
                Aumentar precio
            </button>
        </div>
    );
}

export default Compra;