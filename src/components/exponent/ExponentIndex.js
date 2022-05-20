/* Components Importation */
import SellDatesView from './header/SellDatesView'
import SellDirectionsButton from './header/SellDirectionsButton'
import CarButton from './header/CarButton'
import RequestCategories from './header/categories/RequestCategories'

const ExponentIndex = ({
        portadaSrc = 'temporaly/portada.jpg',
        perfilSrc = 'temporaly/perfil.jpg',
    }) => {
    return(
        <div className="mainWall" >
            <div className="div-head-main" >
                <div className="div-portada" >
                    <img src={ portadaSrc } alt='Portada' />
                </div>
                <div className="div-perfil-photo" >
                    <img src={ perfilSrc } alt='Perfil'/>
                </div>
                <div className="div-dates-car" >
                    <SellDatesView></SellDatesView>
                    <div className='position-buttons' >
                        <SellDirectionsButton></SellDirectionsButton>
                        <CarButton></CarButton>
                    </div>
                </div>
                <div className="div-sections-selectors" >
                    <RequestCategories></RequestCategories>
                </div>
            </div>
        </div>
    )
}
export default ExponentIndex