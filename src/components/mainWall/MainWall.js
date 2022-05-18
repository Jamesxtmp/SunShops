/* CSS Importation */
import './css/mainWall.css'

/* Components Importation */
import SellDatesView from './SellDatesView'
import SellDirectionsButton from './SellDirectionsButton'
import CarButton from './CarButton'
import SelectorsCategories from './categories/SelectorsCategories'

const MainWall = ({
        portadaSrc = 'temporaly/portada.jpg',
        perfilSrc = 'temporaly/perfil.jpg',
    }) => {
    return(
        <div className="mainWall" >
            <div className="div-head-main" >
                <div className="div-portada" >
                    <img src={ portadaSrc } />
                </div>
                <div className="div-perfil-photo" >
                    <img src={ perfilSrc } />
                </div>
                <div className="div-dates-car" >
                    <SellDatesView></SellDatesView>
                    <div className='position-buttons' >
                        <SellDirectionsButton></SellDirectionsButton>
                        <CarButton></CarButton>
                    </div>
                </div>
                <div className="div-sections-selectors" >
                    <SelectorsCategories></SelectorsCategories>
                </div>
            </div>
        </div>
    )
}
export default MainWall