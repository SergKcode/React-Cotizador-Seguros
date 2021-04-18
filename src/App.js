import React from "react"
import {Header} from "./components/Header";
import styled from "@emotion/styled";
import Form from "./components/Form"

const Contenedor =styled.div`
max-width:600px;
margin: 0 auto;

`;

const ContenedorFormulario =styled.div`
background-color:#FFF;
padding: 3rem;

`;

function App() {
  return (
    <Contenedor>
      <Header titulo = 'Cotizador de Seguros'/>
      <ContenedorFormulario>
        <Form/>

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
