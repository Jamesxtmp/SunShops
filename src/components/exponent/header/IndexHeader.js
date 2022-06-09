//? React
import { useState, useEffect } from "react"

//? Redux
import { useSelector } from "react-redux"

//? Styled Components
import styled from "styled-components"

//? Components
import Title from "./Title"
import SectionsNav from "./SectionsNav"
import PerfilPortada from "./PerfilPortada"
import IndexInfoCar from "./infoCar/IndexInfoCar"

const IndexHeaderSC = styled.div`
    background-color: #c62f2f;
`
const HeaderDataSC = styled.div`
    background-color: #2a679da1;
    padding: 0 var(--margin-spare);
`

const IndexHeader = () => {
    const InformationDbRx_load = useSelector( state => state.fireDataReducer.information )
    const InformationDbRx = InformationDbRx_load === undefined ? 'Cargando' : Object.keys( InformationDbRx_load ).length !== 0 ? InformationDbRx_load : 'Cargando'
    if( InformationDbRx ){
        return(
            <IndexHeaderSC>
                <PerfilPortada information={ InformationDbRx } ></PerfilPortada>
                <HeaderDataSC>
                    <IndexInfoCar information={ InformationDbRx } ></IndexInfoCar>
                    <Title></Title>
                    <SectionsNav></SectionsNav>
                </HeaderDataSC>
            </IndexHeaderSC>
        )
    }else{
        return null
    } 
}
export default IndexHeader