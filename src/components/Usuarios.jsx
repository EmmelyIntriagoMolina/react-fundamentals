import { useState, useEffect } from 'react'
import "../css/Usuarios.css"

function Usuarios() { 

    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const obtenerUsuarios = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!response.ok) {
                    throw new Error('Error al obtener los usuarios')
                }
                const data = await response.json()
                setUsuarios(data)
  
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            } 
        }
        obtenerUsuarios()
    }, [])
 
    return ( 
        <div className="usuarios-container">
            <h2 className="usuarios-titulo">Directorio de usuarios</h2>
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