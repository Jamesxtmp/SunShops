import { useEffect } from "react"

import { useDispatch } from "react-redux"
import { setVarCssRule } from "../../../../redux/slices/cssMetods"

import { assignColorCalification } from "./hooks/assignColorCalification"
import { convertSegidores } from "./hooks/convertSegidores"

import styled from "styled-components"


const CalificationPoint = styled.div`
    display: inline-block;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    border: 1px solid #E9E9E9;
    background-color: ${ props => props.activeProp };
    `

const SellDatesView = ( props ) => {
    const dispatch = useDispatch()
    const { followers, calification } = props.information
    const followersAns = convertSegidores( followers )
    const colorCalification = assignColorCalification( calification )
    useEffect( () => {
        if( colorCalification ){
            dispatch( setVarCssRule({ name: '--color-calification', value: `${ colorCalification }` }) )
        }
    }, [] )
    return(
        <div className="sellDatesView" name='hola'>
            <div className="followers" > {`${ followersAns } Seguidores`} </div>
            <div className="calification" >
                <div className="calification-string">Calificación</div>
                { calification
                ?   <>
                        <CalificationPoint activeProp={ calification >= 0 ? 'var(--color-calification)' : '#00000000' } className={`${ calification >= 0 ? 'active' : 'inactive'}`}></CalificationPoint>
                        <CalificationPoint activeProp={ calification >= 2 || calification ===  0 ? 'var(--color-calification)' : '#00000000' } className={`${ calification >= 2 || calification ===  0 ? 'active' : 'inactive'}`}></CalificationPoint>
                        <CalificationPoint activeProp={ calification >= 3 || calification ===  0 ? 'var(--color-calification)' : '#00000000' } className={`${ calification >= 3 || calification ===  0 ? 'active' : 'inactive'}`}></CalificationPoint>
                        <CalificationPoint activeProp={ calification >= 4 || calification ===  0 ? 'var(--color-calification)' : '#00000000' } className={`${ calification >= 4 || calification ===  0 ? 'active' : 'inactive'}`}></CalificationPoint>
                        <CalificationPoint activeProp={ calification >= 5 || calification ===  0 ? 'var(--color-calification)' : '#00000000' } className={`${ calification >= 5 || calification ===  0 ? 'active' : 'inactive'}`}></CalificationPoint>
                
                    </>
                :   <></> 
                }
            </div>
        </div>
    )
}
export default SellDatesView