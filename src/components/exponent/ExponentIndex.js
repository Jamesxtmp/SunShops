/* Components Importation */
import RequestCategories from './RequestCategories'

import SellDatesView from './infoHeader/SellDatesView'
import SellDirectionsButton from './infoHeader/SellDirectionsButton'
import CarButton from './infoHeader/CarButton'

const ExponentIndex = ({
        portadaSrc = 'temporaly/portada.jpg',
        perfilSrc = 'temporaly/perfil.jpg',
    }) => {
    return(<>
        <RequestCategories />
        <div className="exponent" >
            <div className="head-main" >
                <div className="portada-photo" >
                    <img src={ portadaSrc } alt='Portada' />
                </div>
                <div className="perfil-photo" >
                    <img src={ perfilSrc } alt='Perfil'/>
                </div>
                <div className="more-info" >
                    <SellDatesView></SellDatesView>
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