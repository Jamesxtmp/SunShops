const SellDatesView = ({
    followers = 123123,
    calification = 4
}) => {
    const convertSegidores = () => {
        const followersString = followers.toString()
        if( followers < 999 ){
            return followersString

        }else if( followers < 999999 ){
            let followersConcat = ''
            for( let i = 0; i < 3; i++){
                followersConcat += followersString.charAt(i)
            }
            followersConcat += 'K'

            return followersConcat
        }else{
            let followersConcat = ''
            for( let i = 0; i < 3; i++){
                followersConcat += followersString.charAt(i)
            }
            followersConcat += 'M'

            return followersConcat
        }
    }
    const assignColorCalification = () => {
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
        document.documentElement.style.setProperty('--color-calification', colorToCalification)
    }
    const followersAns = convertSegidores()
    assignColorCalification()
    return(
        <div className="sellDatesView" >
            <div className="followers" > {`${ followersAns } Seguidores`} </div>
            <div className="calification" >
                <div className="calification-string"> Calificación </div>
                <div className={`calification-point ${ calification >= 0 ? 'active' : 'inactive'}`}></div>
                <div className={`calification-point ${ calification >= 2 || calification ==  0 ? 'active' : 'inactive'}`}></div>
                <div className={`calification-point ${ calification >= 3 || calification ==  0 ? 'active' : 'inactive'}`}></div>
                <div className={`calification-point ${ calification >= 4 || calification ==  0 ? 'active' : 'inactive'}`}></div>
                <div className={`calification-point ${ calification >= 5 || calification ==  0 ? 'active' : 'inactive'}`}></div>

            </div>
        </div>
    )
}
export default SellDatesView