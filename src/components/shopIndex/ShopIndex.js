/* CSS Importation */
import './css/shopIndex.css'

/* Components Importation */
import SellDatesView from './header/SellDatesView'
import SellDirectionsButton from './header/SellDirectionsButton'
import CarButton from './header/CarButton'
import CategoriesIndex from './header/categories/CategoriesIndex'

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
                    <CategoriesIndex></CategoriesIndex>
                </div>
            </div>
        </div>
    )
}
export default MainWall