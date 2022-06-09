export const convertSegidores = ( followers ) => {
    if( followers ){
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
}