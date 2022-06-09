//? React
import { useEffect } from "react"
//? Redux
import { useDispatch } from "react-redux"
import { setVarCssRule } from "../../redux/slices/cssMetods"
import { extractData } from "../../redux/slices/extractFireData"
//? Styled Components
import styled from "styled-components"
//? Components
import IndexHeader from "./header/IndexHeader"


const IndexExponentSC = styled.div`
    background-color: #242424;
    margin: auto;
    width: 100%;
    max-width: 800px;
    margin: auto;
`

const IndexExponent = () => {
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch( setVarCssRule({ name: '--margin-spare', value: `${ document.getElementById('indexExponent').clientWidth / 25 }px` })  )
        dispatch( extractData('sunshops') )
    }, [dispatch] )


    return(
        <IndexExponentSC id="indexExponent">
            <IndexHeader />
        </IndexExponentSC>
    )
}
export default IndexExponent