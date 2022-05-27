export const setVariablesCss = () => {
    const sheetStyle = document.styleSheets[ document.styleSheets.length - 1 ]
    //? Medidas Requeridas
    const perfilWidth = document.getElementById('perfil-photo').clientWidth
    const portadaHeigth = document.getElementById('portada-photo').clientHeight
    const headMainHeigth = document.getElementById('head-main').clientHeight

    //? Hacer el Perfil cudarado
    sheetStyle.insertRule( `body{ --perfilElement-height: ${perfilWidth}px } `)
    //? Recorte Circular a cualquier imagen
    sheetStyle.insertRule( `body{ --perfilElement-clipPath: circle(${perfilWidth / 2 }px) } `)
    //? Hacer que el perfil se alinie
    sheetStyle.insertRule( `body{ --perfilElement-top: calc( ${ portadaHeigth }px - ${(perfilWidth / 2)}px) }`)
    //? Hacer que la info se alinie
    sheetStyle.insertRule( `body{ --moreInfoElement-top: ${ portadaHeigth + 10 }px }`)
    //?Hacer que el titulo que alinie
    sheetStyle.insertRule( `body{ --titleElement-top: ${perfilWidth / 4 }px }`)

    //?Hacer que headMain Tome tamano
    sheetStyle.insertRule( `body{ --headMainElement-heigth: calc( ${ headMainHeigth }px + ${perfilWidth / 2 + 8 }px ) }`)
    
    
    const wrapCategories = document.getElementById('wrap-categories')
    const wrapCategoriesPlus = document.getElementById('wrap-categories-plus')
    const getArrCssRules = () => Object.keys(sheetStyle.cssRules).map( key => sheetStyle.cssRules[key] )
    const getRuleByFrase = ( frace ) => getArrCssRules().find( rule => rule.cssText.indexOf( frace ) !== -1 )
    const shadowColor = 'gray'
    const shadowRight = 'inset -8px 0px 4px -4px'
    const shadowLeft = 'inset 8px 0px 4px -4px'
    const shadowBottom = 'inset 0px -8px 4px -4px'
    const shadowTop = 'inset 0px 8px 4px -4px'
    
    window.onload = () => {
        if( wrapCategories.clientWidth < wrapCategories.scrollWidth ){
            sheetStyle.insertRule( `body{ --categoriesElement-boxShadow: ${ shadowRight } ${ shadowColor } }` )
        }
        if( wrapCategoriesPlus.clientHeight < wrapCategoriesPlus.scrollHeight ){
            sheetStyle.insertRule( `body{ --categoriesPlusElement-boxShadow: ${ shadowBottom } ${ shadowColor } }` )
        }
    }
    wrapCategories.addEventListener('scroll', e => {
        const totalScroll = e.target.scrollWidth - e.target.clientWidth 
        const scrollLeft = e.target.scrollLeft
        
        if( totalScroll > 0 && scrollLeft == 0 ){
            sheetStyle.deleteRule( getArrCssRules().indexOf( getRuleByFrase('--categoriesElement-boxShadow') ) )
            sheetStyle.insertRule( `body{ --categoriesElement-boxShadow: ${ shadowRight } ${ shadowColor } }` )
        }else if( scrollLeft > 0 && scrollLeft < totalScroll){
            sheetStyle.deleteRule( getArrCssRules().indexOf( getRuleByFrase('--categoriesElement-boxShadow') ) )
            sheetStyle.insertRule( `body{ --categoriesElement-boxShadow: ${ shadowRight } ${ shadowColor }, ${ shadowLeft } ${ shadowColor } }` )
        }else{
            sheetStyle.deleteRule( getArrCssRules().indexOf( getRuleByFrase('--categoriesElement-boxShadow') ) )
            sheetStyle.insertRule( `body{ --categoriesElement-boxShadow: ${ shadowLeft } ${ shadowColor } }` )
        }
    })
    wrapCategoriesPlus.addEventListener('scroll', e => {
        const totalScroll = e.target.scrollHeight - e.target.clientHeight
        const scrollTop = e.target.scrollTop
        
        if( totalScroll > 0 && scrollTop == 0 ){
            sheetStyle.deleteRule( getArrCssRules().indexOf( getRuleByFrase('--categoriesPlusElement-boxShadow') ) )
            sheetStyle.insertRule( `body{ --categoriesPlusElement-boxShadow: ${ shadowBottom } ${ shadowColor } }` )
        }else if( scrollTop > 0 && scrollTop < totalScroll ){
            sheetStyle.deleteRule( getArrCssRules().indexOf( getRuleByFrase('--categoriesPlusElement-boxShadow') ) )
            sheetStyle.insertRule( `body{ --categoriesPlusElement-boxShadow: ${ shadowBottom } ${ shadowColor }, ${ shadowTop } ${ shadowColor } }` )
        }else{
            sheetStyle.deleteRule( getArrCssRules().indexOf( getRuleByFrase('--categoriesPlusElement-boxShadow') ) )
            sheetStyle.insertRule( `body{ --categoriesPlusElement-boxShadow: ${ shadowTop } ${ shadowColor } }` )
        }
    })

    const rootElement = document.getElementById('root')
    const portadaElement = document.getElementById('portada-photo')
    console.log( document.styleSheets )
    rootElement.addEventListener('scroll', e => {
        //? Movimiento de la portada
        sheetStyle.insertRule( `body{ --portadaElement-top: calc( ${ portadaHeigth }px - ${(perfilWidth / 2)}px) }`)
        console.log( e.target.scrollTop )
    })
}
