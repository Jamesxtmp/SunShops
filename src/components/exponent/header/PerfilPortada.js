//? React 
import { useEffect } from "react"
//? Redux 
import { useDispatch, useSelector } from "react-redux"
import { setVarCssRule } from "../../../redux/slices/cssMetods"
//? Styled Components 
import styled from "styled-components"

const Portada_sc = styled.div`
    background-color: #4ca988;
    height: calc( var(--height-fragment) * 2 );

    @media (min-width: 800px) {
        border-radius: 0 0 16px 16px;
    }
`
const Perfil_sc = styled.div`
    background-color: #31a0a0;
    width: 20%;
    height: var(--height-perfil);
    position: absolute;
    bottom: calc( var(--height-fragment) * -0.75 );
    left: var(--margin-spare);
`

const PerfilPortada = () => {
    const dispatch = useDispatch()
    useEffect ( () => {
        dispatch( setVarCssRule( { name: '--height-fragment', value: `${document.getElementById('portada').clientWidth / 2.6 / 2 }px` } ) )
        dispatch( setVarCssRule( { name: '--height-perfil', value: `${document.getElementById('perfil').clientWidth}px` } ) )
    },[])
    useSelector( state => console.log( state.cssReducer  ) )
    return(
        <Portada_sc id="portada">
            <Perfil_sc id="perfil"/>
        </Portada_sc>
    )
}
export default PerfilPortada