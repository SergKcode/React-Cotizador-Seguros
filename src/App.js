import React, {useState} from "react"
import {Header} from "./components/Header";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Resumen from "./components/Resumen"

const Contenedor =styled.div`
max-width:600px;
margin: 0 auto;

`;

const ContenedorFormulario =styled.div`
background-color:#FFF;
padding: 3rem;

`;

function App() {

  const [resumen, guardarResumen] =useState({
    cotizacion:0,
    datos:{
      marca:"",
      anno: "",
      plan:"",
    }
  })
  const {datos} = resumen
  return (
    <Contenedor>
      <Header titulo = 'Cotizador de Seguros'/>
      <ContenedorFormulario>
        <Form guardarResumen={guardarResumen}/>
        
        <Resumen datos={datos} />

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
