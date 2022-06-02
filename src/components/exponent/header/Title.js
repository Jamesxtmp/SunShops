import styled from "styled-components"

const Title_sc = styled.div`
    background-color: #37b31e;
    height: calc( var(--height-fragment) * .75 );
`

const Title = () => {
    return(
        <Title_sc>
            Title
        </Title_sc>
    )
}
export default Title