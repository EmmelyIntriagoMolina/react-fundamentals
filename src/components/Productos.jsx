import { useState, useMemo } from "react";
import "../css/Productos.css"

const productos = [
    { id: 1, nombre: "Laptop Lenovo", precio: 850 },
    { id: 2, nombre: "Mouse Logitech", precio: 25 },
    { id: 3, nombre: "Teclado mecánico", precio: 70 },
    { id: 4, nombre: "Monitor Samsung", precio: 300 },
    { id: 5, nombre: "Laptop HP", precio: 750 },
    { id: 6, nombre: "Audífonos Sony", precio: 90 }
]

function Productos() {

    const [busqueda, setBusqueda] = useState("");
    const productosFiltrados = useMemo(() => {

        return productos.filter((producto) => {
            return producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
        })
    }, [busqueda])

    return (
        <div className="productos-container">
            <h2>Catálogo de Productos</h2>
            <p className="productos-subtitulo">Encuentra el producto que necesitas</p>

            <input 
                className="productos-buscador"
                type="text" 
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            <div className="productos-lista">
                { productosFiltrados.length === 0 && (
                    <p>No se encontraron productos.</p>
                )}

                { productosFiltrados.length > 0 && (
                        productosFiltrados.map((producto) => (
                            <div className="producto-card" key={producto.id}>
                                <h3>{producto.nombre}</h3>
                                <p className="producto-precio">${producto.precio.toFixed(2)}</p>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default Productos;