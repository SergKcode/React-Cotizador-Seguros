import React from 'react'
import styled from "@emotion/styled";

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
const Form = () => {
    return (
        <form>
            <Campo>
                <Label>Marca</Label>
                <Select>
                    <option value="">--- Seleccione----</option>
                    <option value="SEAT">SEAT</option>
                    <option value="BMW">BMW</option>
                    <option value="MERCEDES">MERCEDES</option>
                    <option value="FORD">FORD</option>
                   
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select>
                    <option value="">--- Seleccione----</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                   
                </Select>
            </Campo>
            <Campo>
            <Label>Plan</Label>
                <InputRadio
                type="radio"
                name="plan"
                value="basico"
                />basico
                <InputRadio
                type="radio"
                name="plan"
                value="Completo"
                />Completo
            </Campo>
            <Button>Cotizar</Button>
        </form>
        
    )
}

export default Form;