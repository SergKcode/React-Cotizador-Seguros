import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition  } from 'react-transition-group';
import PropTypes from 'prop-types';

const ResultadoCotizacion =styled.div`
    text-align:center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    margin-top: 1rem;
    background-color:rgba(127,224,237);
    position: relative;
    
`

const Mensaje =styled.p`
    background-color:rgba(127,224,237);
    margin-top:2rem;
    padding:1 rem;
    text-align:center;
`
const TextoCotización = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;

`

const Resultado = ({cotizacion}) => {


    return (
        (cotizacion === 0) 
        ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
        : 
        (
            <ResultadoCotizacion>
                <TransitionGroup
                    component="p"
                    className="resultado"
                >
                    <CSSTransition  
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter: 500 , exit: 500}}
                    >
                        <TextoCotización>El total es: ${cotizacion}</TextoCotización>
                    </CSSTransition>
                </TransitionGroup>
                
            </ResultadoCotizacion>
        )
    )
}


export default Resultado;