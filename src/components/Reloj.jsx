import { useState, useEffect } from "react";
import "../App.css";

function Reloj() { 

    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000)

        return () => clearInterval(intervalo);
    }, [])
    
    return <>
        <h2>Reloj digital:</h2>
        <h1>{hora.toLocaleTimeString()}</h1>

    </>

}

export default Reloj;