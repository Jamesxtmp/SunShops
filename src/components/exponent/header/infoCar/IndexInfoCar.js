import styled from "styled-components"

import SellDatesView from "./SellDataView"

const InfoCarSC = styled.div`
    background-color: #90b31e;
    height: calc( var(--height-fragment) * .75 );
    width: calc( 100% - var(--height-perfil) );
    left: var(--height-perfil);
`

const InfoCar = ({ information }) => {
    return(
        <InfoCarSC>
            <SellDatesView information={ information }  ></SellDatesView>
        </InfoCarSC>
    )
}
export default InfoCar