import styled from 'styled-components'

export const BasicButton = styled.button`
    background-color: transparent;
    border: none;
`

export const FlexBox = styled.div`
    display: flex;
    
    ${(props) => {
        const flexDirection = props.flexDirection ? props.flexDirection : ''
        const justifyContent = props.justifyContent ? props.justifyContent : ''
        
        return `
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        `
    }}
`

export const BtnImg = styled.img`
    position: relative;
`

export const NavItem = styled(FlexBox)`
    cursor: pointer;
    justify-content: left;
    align-items: center;
    text-align: left;
    color: white;
    margin: 0 8px 0 12px;
    padding: 0 12px;
    border-radius: 10px;

    &:hover{
        background-color: #272727;
    }

    ${(props) => {
        const backgroundColor = props.backgroundColor ? props.backgroundColor : ''
        const fontSize = props.fontSize ? props.fonrSize : '16px'
        const margin = props.margin ? props.margin : '0 8px 0 12px'
        
        return `
        background-color: ${backgroundColor};
        font-size: ${fontSize};
        margin: ${margin};
        `
    }}
`

export const NavText = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
    height: 40px;
    padding: 10px 0 0 24px;
    margin: 0px;
    font-size: 14px;
    font-weight: 400;
    pointer-events: none;
`

export const NavIcon = styled.img`
    width: 24px;
    height: fit-content;
    filter: brightness(0) invert(1);
    pointer-events: none;
    margin: 0 0 6px;
`