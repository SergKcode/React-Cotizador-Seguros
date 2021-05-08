import React, {useState} from 'react'
import styled from "@emotion/styled";
import {obtenerDiferenciaAnno, calcularMarca, obtenerPlan} from "../helper"


//---------STYLED COMPONENTS

const Campo =styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items:center;

`;
const Label =styled.label`
    flex: 0 0 100px;

`;

const Select =styled.select`
    display:block;
    width:100%; 
    padding: 1rem;
    border:1px solid #e1e1e1;
    -webkit-appearance:none;
`;

const InputRadio =styled.input`
    margin:0 1rem;
`;

const Button =styled.button`
    background-color:#00838F;
    font-size:16px;
    width:100%;
    padding: 1rem;
    color: #fff;
    text-transform:uppercase;
    font-weight:bold;
    border:none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover{
        background-color:#26C6DA;
        cursor:pointer;
    }

`;

const Error =styled.div`
    background-color:red;
    color:white;
    padding:1rem;
    width:100%;
    text-align:center;
    margin-bottom: 2rem;
`;
const Form = ( {guardarResumen, guardarCargando}) => {
    const [datos, guardarDatos]= useState({
        marca:"",
        anno:"",
        plan:""
    })

    const [error, guardarError] = useState (false)

    //Extraemos los valores del State
    const {marca, anno, plan} = datos;


    //Leer datos del formulario y pasarlos al state
    const obtenerDatos = e =>{
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    //cuando se presiona Submit
    const cotizarSeguro =e=>{
        e.preventDefault();
        if(marca.trim()===""|| anno.trim()===""|| plan.trim()===""){
            guardarError(true);
            return;
        }
        guardarError(false)

        //obtener diferencia de años
        const diferencia= obtenerDiferenciaAnno(anno)

        //base de cotizacion
        let resultado =1500;

        //obtener dif de años, por cada año hay que restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100;
        
        //Aumenta precio: Seat 5% , BMW y mercedes 30%, ford 15%
        resultado = calcularMarca(marca * resultado);

        //Plan Basico aumenta 20%, plan completo 50%

        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat( incrementoPlan * resultado).toFixed(2);

        guardarCargando(true);

        setTimeout(() => {

            // Elimina el spinner
            guardarCargando(false);

            // pasa la información al componente principal
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            });
        }, 3000);

    }


    return (
        <form onSubmit={cotizarSeguro}>
            {error? <Error>Todos los campos son obligatorios</Error> : null }
            <Campo>
                <Label>Marca*</Label>
                <Select name="marca" value={marca} onChange={obtenerDatos}>
                    <option value="">--- Seleccione----</option>
                    <option value="SEAT">SEAT</option>
                    <option value="BMW">BMW</option>
                    <option value="MERCEDES">MERCEDES</option>
                    <option value="FORD">FORD</option>
                   
                </Select>
            </Campo>
            <Campo>
                <Label>Año*</Label>
                <Select name="anno" value={anno} onChange={obtenerDatos}>
                    <option value="">--- Seleccione----</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                   
                </Select>
            </Campo>
            <Campo>
                <Label>Plan*</Label>
                <InputRadio
                type="radio"
                name="plan"
                value="basico"
                checked={plan==="basico"}
                onChange={obtenerDatos}
                />basico
                <InputRadio
                type="radio"
                name="plan"
                value="completo"
                checked={plan==="completo"}
                onChange={obtenerDatos}
                />Completo
            </Campo>
            <Button type ="submit">Cotizar</Button>
        </form>
        
    )
}

export default Form;