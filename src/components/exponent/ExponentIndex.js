/* React */
import { useEffect } from 'react'

/* Redux */
import { useDispatch } from 'react-redux'
import { extractData } from '../../redux/slices/extractFireData'

/* Components Importation */
import SellDataView from './infoHeader/SellDataView'
import SellDirectionsButton from './infoHeader/SellDirectionsButton'
import CarButton from './infoHeader/CarButton'
import CategoriesSelectors from './categoriesSelectors/CategoriesSelectors'

/* help importation */
import { setVariablesCss } from './helpers/headerCssSetVariables'

const ExponentIndex = () => {
    const dispatch = useDispatch()
    dispatch( extractData( 'sunshops' ) )

    useEffect( () => {
        setVariablesCss()
    }, [] )
    return(<>
        <div className="exponent" >
            <div className="head-main" >
                <div className="portada-photo" id='portada-photo'>
                    {/* <img src={ portadaSrc } alt='Portada' /> */}
                    <img src='https://picsum.photos/700/400?random' alt='Portada' />
                </div>
                <div className="perfil-photo" id="perfil-photo">
                    {/* <img src={ perfilSrc } alt='Perfil'/> */}
                    <img id='portada-photo-img' src='https://picsum.photos/400/700?random' alt='Perfil'/>
                </div>
                <div className="more-info" id='more-info'>
                    <SellDataView />
                    <div className='buttons-main' >
                        <SellDirectionsButton />
                        <CarButton />
                    </div>
                </div>
                <div className='shop-name' id='shop-name' >
                    <h1>Lorem Ipsum Dolor Sit se se se se se se se se se se</h1>
                </div>
                <CategoriesSelectors />
            </div>
        </div>
    </>)
}
export default ExponentIndex