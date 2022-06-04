import React from "react";
import "../stylessheets/boton.css"
function Boton({texto,esBotonClick,evento}) { 
    return (
        <button
            className={esBotonClick ? 'boton-click' : 'boton-reiniciar'}
            onClick={evento}>
            {texto}
        </button>
    );
}
export default Boton
