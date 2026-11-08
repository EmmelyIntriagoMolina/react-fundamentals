import { useState, useEffect, useRef } from "react";
import "../css/Cronometro.css";

function Cronometro() {
    const [segundos, setSegundos] = useState(0);
    const intervaloRef = useRef(null);

    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;

    const iniciar = () => {
        if (intervaloRef.current === null) {
            intervaloRef.current = setInterval(() => {
                setSegundos(prev => prev + 1);
            }, 1000);
        }
    }

    const detener = () => {
        if (intervaloRef.current !== null) {
            clearInterval(intervaloRef.current);
            intervaloRef.current = null;
        }
    }

    const reiniciar = () => {
        detener();
        setSegundos(0);
    }

    useEffect(() => {
        return () => {
            detener();
        };
    }, []);

    return (
        <div className="cronometro-container">
            <h2>Cronómetro</h2>
            <h2 className="cronometro-display">
                {String(minutos).padStart(2, '0')}:
                {String(segundosRestantes).padStart(2, '0')}
            </h2>
            <div className="cronometro-botones">
                <button className="btn-iniciar" onClick={iniciar}>Iniciar</button>
                <button className="btn-detener" onClick={detener}>Detener</button>
                <button className="btn-reusiniciar" onClick={reiniciar}>Reiniciar</button>
            </div>
        </div>
    )

}

export default Cronometro