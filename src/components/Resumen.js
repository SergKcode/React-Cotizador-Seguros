import React from 'react'

const Resumen = ( {datos}) => {
    const {marca,anno, plan}=datos;

    if(marca === ""|| anno=== ""|| plan==="") return null;
    return (
        <>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca:</li>
                <li>Plan:</li>
                <li>Año del Auto:</li>

            </ul>
        </>
    );
}


export default Resumen;