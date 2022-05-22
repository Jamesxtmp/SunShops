/* Redux */
import { useSelector} from 'react-redux'

/*React */
import { useEffect } from 'react'

const CategoriesSelectors = () => {
    const count = useSelector( state => state )
    useEffect( () => {
        console.log( count )
    },[] )
    return(<>
        <div>
            CategoriesSelectors{ console.log( count ) }
        </div>
    </>)
}
export default CategoriesSelectors