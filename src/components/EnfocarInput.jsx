import { useRef, useState } from 'react';

function EnfocarInput() {
    const inputRef = useRef(null);
    

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={() =>inputRef.current.focus()}>
                Enfocar
            </button>
        </div>
    )
}

export default EnfocarInput