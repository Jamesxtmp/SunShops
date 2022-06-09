//? React 
import { useEffect, useState } from "react"
//? Redux 
import { useDispatch, useSelector } from "react-redux"
import { setVarCssRule } from "../../../redux/slices/cssMetods"
//? Styled Components 
import styled from "styled-components"

const PortadaSC = styled.div`
    height: calc( var(--height-fragment) * 2 );
    display: flex;
    align-items: center;
    overflow: hidden;

    @media (min-width: 800px) {
        border-radius: 0 0 16px 16px;
    }
    img{
        width: 100%;

    }
`
const PerfilSC = styled.div`
    width: 20%;
    height: var(--height-perfil);
    position: absolute;
    top: calc( calc( var(--height-fragment) * 2) - calc( var(--height-perfil) - calc( var(--height-fragment) * .75 ) ) );
    left: var(--margin-spare);
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    img{
        width: 100%;
    }
`

const PerfilPortada = ({ information }) => {
    const {  perfilLink, portadaLink } = information
    const dispatch = useDispatch()

    useEffect ( () => {
        dispatch( setVarCssRule( { name: '--height-fragment', value: `${document.getElementById('portada').clientWidth / 2.6 / 2 }px` } ) )
        dispatch( setVarCssRule( { name: '--height-perfil', value: `${document.getElementById('perfil').clientWidth}px` } ) )
    }, [])
    return(<>
        <PortadaSC id="portada">
            <img src={ portadaLink } alt='Portada' ></img>
        </PortadaSC>
        <PerfilSC id="perfil">
            <img src={ perfilLink  } alt='Perfil'></img>
        </PerfilSC>
    </>)
}
export default PerfilPortada