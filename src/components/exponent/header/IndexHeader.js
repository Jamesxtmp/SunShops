import styled from "styled-components"

import Title from "./Title"
import SectionsNav from "./SectionsNav"
import PerfilPortada from "./PerfilPortada"
import InfoCar from "./InfoCar"

const IndexHeader_sc = styled.div`
    background-color: #c62f2f;
`
const HeaderData_sc = styled.div`
    background-color: #2a679da1;
    padding: 0 var(--margin-spare);
`


const IndexHeader = () => {
    return(
        <IndexHeader_sc name='indexHeader'>
            <PerfilPortada></PerfilPortada>
            <HeaderData_sc>
                <InfoCar></InfoCar>
                <Title></Title>
                <SectionsNav></SectionsNav>
            </HeaderData_sc>
        </IndexHeader_sc>
    )
}
export default IndexHeader