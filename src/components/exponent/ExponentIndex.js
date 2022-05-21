/*  */
import { useEffect } from 'react'

/* Components Importation */
import RequestCategories from './RequestCategories'

import SellDataView from './infoHeader/SellDataView'
import SellDirectionsButton from './infoHeader/SellDirectionsButton'
import CarButton from './infoHeader/CarButton'


const ExponentIndex = ({
        portadaSrc = 'temporaly/portada.jpg',
        perfilSrc = 'temporaly/perfil.jpg',
}) => {
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
        console.log( `${ portadaHeigth } px` )

    }, [] )
    return(<>
        <RequestCategories />
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
                    <SellDataView></SellDataView>
                    <div className='buttons-main' >
                        <SellDirectionsButton></SellDirectionsButton>
                        <CarButton></CarButton>
                    </div>
                </div>
                <div className="div-sections-selectors" >
                </div>
            </div>
        </div>
    </>)
}
export default ExponentIndex