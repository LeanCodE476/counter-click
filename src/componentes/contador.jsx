import React from "react";
import "../stylessheets/contador.css"
function Contador({number}) {
    return (
        <div className="container-numero">{ number}</div>
    )
}
export default Contador