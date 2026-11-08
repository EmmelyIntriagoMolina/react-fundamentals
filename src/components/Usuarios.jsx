import { useState, useEffect } from 'react'
import "../css/Usuarios.css"
import { obtenerDatos } from '../helpers/api';


function Usuarios() { 

    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [actualizar, setActualizar] = useState(0)

    useEffect(() => {
        
        const controller = new AbortController();

        const obtenerUsuarios = async () => {
            setLoading(true)
            setError(null)

            try {
                const data = await obtenerDatos(
                    'https://jsonplaceholder.typicode.com/users',
                    controller.signal
                )
                setUsuarios(data)
  
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message)
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            } 
        }
        obtenerUsuarios()

        return () => {
            controller.abort();
        };
    }, [actualizar])
 
    return ( 
        <div className="usuarios-container">
            <h2 className="usuarios-titulo">Directorio de usuarios</h2>

            <button onClick={() => setActualizar((prev) => prev + 1)}>
                Actualizar usuarios
            </button>

            <p className="usuarios-subtitulo">
              Usuarios registrados en el sistema
            </p>

            {loading && (
                <p className="mensaje mensaje-loading">
                Cargando usuarios...</p>
            )}

            {error && (
                <p className="mensaje mensaje-error">Error: {error}</p>
            )}

            {!loading && !error && usuarios.length === 0 && (
                <p className="mensaje mensaje-vacio">
                    No hay usuarios disponibles.
                </p>
            )}

            {!loading && !error &&usuarios.length > 0 && (
                <ul className="usuarios-lista">
                    { usuarios.map((usuario) => (
                        <li className="usuario-item" key={usuario.id}>
                            <div className="usuario-avatar">
                                {usuario.name.charAt(0)}
                            </div>
                            <div className="usuario-info">
                                <span className="usuario-nombre">
                                    {usuario.name}
                                </span>
                                <span className="usuario-email">
                                    {usuario.email}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Usuarios