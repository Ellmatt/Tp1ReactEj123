import React, { useState } from 'react';


const Saludo3 = () => {
    // aqui va la logica
   
const [mensaje, setMensaje] = useState('Hello World!')

const cambiar = ()=>{
    setMensaje('Hello World (from changed state) !')
}
const reset = ()=>{
    setMensaje('Hello World!')
}
    return (
        
        <>
        <h3>{mensaje}
        </h3>
        <button onClick={cambiar}>Click</button>
        <button onClick={reset}>Reset</button>
        </>
    );
};

export default Saludo3;