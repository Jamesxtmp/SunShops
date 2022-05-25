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

const ExponentIndex = () => {
    const dispatch = useDispatch()
    dispatch( extractData( 'sunshops' ) )

    useEffect( () => {
        //? Hacer el Perfil cudarado
        const perfilElement = document.getElementById('perfil-photo')
        perfilElement.style.height = `${perfilElement.clientWidth}px`
        //? Recorte Circular a cualquier imagen
        const imgPerfilElement = document.getElementById('portada-photo-img')
        imgPerfilElement.style.clipPath = `circle( ${perfilElement.clientWidth / 2 }px )`
        //? Hacer que el perfil se alinie
        const portadaHeigth = document.getElementById('portada-photo').clientHeight
        perfilElement.style.top = `calc( ${ portadaHeigth }px - ${(perfilElement.clientWidth / 2)}px )`
        //? Hacer que la info se alinie
        const moreInfoElement = document.getElementById('more-info')
        moreInfoElement.style.top = `${ portadaHeigth + 10 }px`
        //?Hacer que el titulo que alinie
        const titleElement = document.getElementById('shop-name')
        titleElement.style.top = `${perfilElement.clientWidth / 2 + 8 }px`
        //?Hacer que Selectors se alinie
        const selectorsElement = document.getElementById('selectors')
        selectorsElement.style.top = `${perfilElement.clientWidth / 2 + 18 }px`
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