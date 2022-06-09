export const assignColorCalification = ( calification ) => {
    if( calification ){
        let colorToCalification = ''
        switch (calification) {
            case null:
                colorToCalification = '#00000000'
                break
            case 0:
                colorToCalification = '#ff3333'
                break
            case 1:
                colorToCalification = '#ea5353'
                break
            case 2:
                colorToCalification = '#ea9453'
                break
            case 3:
                colorToCalification = '#d3ea53'
                break
            case 4:
                colorToCalification = '#53ea9c'
                break
            case 5:
                colorToCalification = '#53adea'
                break
            case 6:
                colorToCalification = '#4714ff'
                break
            default:
                console.log( 'Algo Fallo en el switch que asigna los colores a la calificaion' )
                break
        }
        return colorToCalification
    }
}
