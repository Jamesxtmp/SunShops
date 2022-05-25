import { useSelector } from "react-redux"

const CategoriesSelectors = () => {
    const categories = useSelector( state => state.fireDataReducer.categories )

    return(
        <div className="selectors" id="selectors">
            <div className="wrap-categories" id="wrap-categories">{
                categories === undefined
                ?   'Cargando...'
                :   categories.map( categorie =>
                        // id invalido
                        <div className="wrap-categorie" key={ Math.random() } >
                            <div className="logo" >{
                                categorie.iconType == 'fwName'
                                ?   <i className={`fa-solid ${categorie.iconlink}`}></i>
                                :   categorie.iconType == 'imgSrc'
                                    ? <img src={categorie.iconlink} />
                                    : console.log('Formato de imagen desconocido')
                            }</div>
                            <div className="title" > { categorie.title } </div>
                        </div>
                    )
            }</div>
            <div className="wrap-categories-plus" id="wrap-categories-plus">
                <div className="wrap-categorie-plus" >
                    <i className="fa-solid fa-dragon"></i>
                </div>
                <div className="wrap-categorie-plus" >
                    <i className="fa-solid fa-dragon"></i>
                </div>
                <div className="wrap-categorie-plus" >
                    <i className="fa-solid fa-dragon"></i>
                </div>
            </div>
        </div>
        
    )
}
export default CategoriesSelectors