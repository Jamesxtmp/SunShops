export const setVariablesCss = () => {
    const sheetStyle = document.styleSheets[ document.styleSheets.length - 1 ]
    //? Medidas Requeridas
    const perfilWidth = document.getElementById('perfil-photo').clientWidth
    const portadaHeigth = document.getElementById('portada-photo').clientHeight

    //? Hacer el Perfil cudarado
    sheetStyle.insertRule( `body{ --perfilElement-height: ${perfilWidth}px } `)
    //? Recorte Circular a cualquier imagen
    sheetStyle.insertRule( `body{ --perfilElement-clipPath: circle(${perfilWidth / 2 }px) } `)
    //? Hacer que el perfil se alinie
    sheetStyle.insertRule( `body{ --perfilElement-top: calc( ${ portadaHeigth }px - ${(perfilWidth / 2)}px) }`)
    //? Hacer que la info se alinie
    sheetStyle.insertRule( `body{ --moreInfoElement-top: ${ portadaHeigth + 10 }px }`)
    //?Hacer que el titulo que alinie
    sheetStyle.insertRule( `body{ --titleElement-top: ${perfilWidth / 2 + 8 }px }`)

    //?Hacer que Selectors se alinie
    sheetStyle.insertRule( `body{ --selectorsElement-top: ${perfilWidth / 2 + 18 }px }`)



    
    
    const wrapCategories = document.getElementById('wrap-categories')
    const wrapCategoriesPlus = document.getElementById('wrap-categories-plus')
    const shadowColor = 'gray'
    const getArrCssRules = () => Object.keys(sheetStyle.cssRules).map( key => sheetStyle.cssRules[key] )
    const getRuleByFrase = ( frace ) => getArrCssRules().find( rule => rule.cssText.indexOf( frace ) !== -1 )
    
    window.onload = () => {
        if( wrapCategories.clientWidth < wrapCategories.scrollWidth ){
            sheetStyle.insertRule( `body{ --categoriesElement-boxShadow: inset -8px 0px 8px -4px ${ shadowColor } }` )
        }
        if( wrapCategoriesPlus.clientHeight < wrapCategoriesPlus.scrollHeight ){
            sheetStyle.insertRule( `body{ --categoriesPlusElement-boxShadow: inset 0px -8px 8px -4px ${ shadowColor } }` )
        }
    }
    wrapCategories.addEventListener('scroll', e => {
        const totalScroll = e.target.scrollWidth - e.target.clientWidth 
        const scrollLeft = e.target.scrollLeft
        
        if( totalScroll > 0 && scrollLeft == 0 ){
            sheetStyle.deleteRule( getArrCssRules().indexOf( getRuleByFrase('--categoriesElement-boxShadow') ) )
            sheetStyle.insertRule( `body{ --categoriesElement-boxShadow: inset -8px 0px 8px -4px ${ shadowColor } }` )
        }else if( scrollLeft > 0 && scrollLeft < totalScroll ){
            sheetStyle.deleteRule( getArrCssRules().indexOf( getRuleByFrase('--categoriesElement-boxShadow') ) )
            sheetStyle.insertRule( `body{ --categoriesElement-boxShadow: inset -8px 0px 8px -4px ${ shadowColor }, inset 8px 0px 8px -4px ${ shadowColor } }` )
        }else{
            sheetStyle.deleteRule( getArrCssRules().indexOf( getRuleByFrase('--categoriesElement-boxShadow') ) )
            sheetStyle.insertRule( `body{ --categoriesElement-boxShadow: inset 8px 0px 8px -4px ${ shadowColor } }` )
        }
    })
    wrapCategoriesPlus.addEventListener('scroll', e => {
        const totalScroll = e.target.scrollHeight - e.target.clientHeight
        const scrollTop = e.target.scrollTop
        
        if( totalScroll > 0 && scrollTop == 0 ){
            sheetStyle.deleteRule( getArrCssRules().indexOf( getRuleByFrase('--categoriesPlusElement-boxShadow') ) )
            sheetStyle.insertRule( `body{ --categoriesPlusElement-boxShadow: inset 0px -8px 8px -4px ${ shadowColor } }` )
        }else if( scrollTop > 0 && scrollTop < totalScroll ){
            sheetStyle.deleteRule( getArrCssRules().indexOf( getRuleByFrase('--categoriesPlusElement-boxShadow') ) )
            sheetStyle.insertRule( `body{ --categoriesPlusElement-boxShadow: inset 0px -8px 8px -4px ${ shadowColor }, inset 0px 8px 8px -4px ${ shadowColor } }` )
        }else{
            sheetStyle.deleteRule( getArrCssRules().indexOf( getRuleByFrase('--categoriesPlusElement-boxShadow') ) )
            sheetStyle.insertRule( `body{ --categoriesPlusElement-boxShadow: inset 0px 8px 8px -4px ${ shadowColor } }` )
        }
    })
}
