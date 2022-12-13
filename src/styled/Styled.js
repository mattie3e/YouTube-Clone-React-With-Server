import styled from 'styled-components'

export const BasicButton = styled.button`
    background-color: transparent;
    border: none;
`

export const FlexBox = styled.div`
    display: flex;
    
    ${(props) => {
        return `
        flex-direction: ${props.flexDirection ? props.flexDirection : ''}
        `
    }}
`

export const BtnImg = styled.img`
    position: relative;
`