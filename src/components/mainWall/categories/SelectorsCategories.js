//React Importations
import React, { useEffect, useState } from 'react'

//Redux Importations
import { useDispatch } from 'react-redux'
import { setCategories } from './categoriesSlice'

//Firebase Importations
import { getDatabase, ref, onValue} from "firebase/database"

//Firebase Constantes
const db = getDatabase();
const categoriesRef = ref(db, 'users/' + 'userId' + '/categories')

const transformJsonToArray = (json, array = []) => {
    for( let i in json ) {
        array.push( json[i] );
    }
    return array
}

const SelectorsCategories = ( ) => {
    const [ categoriesData, setCategoriesData ] = useState([])


    //? Seteando los datos "categorias" de Firebase a Store de Redux
    const dispatch = useDispatch()
    dispatch( setCategories( categoriesData ) )
    
    useEffect( () => {
        //? Toma la 'snapshot' de Firebase
        onValue(categoriesRef, (snapshot) => {
            const data = snapshot.val();
            //? Transoforma la data en array
            const arrData = transformJsonToArray( data )
            //? Setea al State
            setCategoriesData( arrData )
        })
    }, [])
    return(
        <div>
            {/* <button > { Object.keys(categoriesData).length === 0 ? '' : { ...categoriesData } </button> */}
            <h3> { categoriesData.length ? console.log( categoriesData ) : console.log( 'Cargando Categorias' ) } </h3>
        </div>
    )
}
export default SelectorsCategories