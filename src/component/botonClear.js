import React from "react";
import '../css/botonClear.css'

const botonClear = (props) => (
    <div className="boton-clear" onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default botonClear;