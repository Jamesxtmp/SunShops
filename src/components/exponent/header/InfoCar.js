import styled from "styled-components"

const InfoCar_sc = styled.div`
    background-color: #90b31e;
    height: calc( var(--height-fragment) * .75 );
    width: calc( 100% - var(--height-perfil) );
    left: var(--height-perfil);
`

const InfoCar = () => {
    return(
        <InfoCar_sc>
            InfoCar
        </InfoCar_sc>
    )
}
export default InfoCar