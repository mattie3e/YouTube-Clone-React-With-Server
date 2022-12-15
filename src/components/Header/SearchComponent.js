import React from 'react'
import styled from 'styled-components'
import { BasicButton, FlexBox } from '../../styled/Styled'


// 버튼이랑 이미지 상속이랑 props 넣어주게 변경!!!!!!!!!!!

const SearchBox = styled(FlexBox)`
    align-items: center;
    width: 46%;
    max-width: 660px;

    @media (max-width: 720px){
        display: none;
    } 
`

const InnerBox = styled(FlexBox)`
    color: white;
    background-color: var(--youtube-bg-color);
    width: 100%;
    height: 38px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-weight: 400;
    border-radius: 40px 0 0 40px;

    ${(props) => {
        const borderColor = props.borderColor ? props.borderColor : '#313131'
        const padding = props.padding ? props.padding : '0 6px'
        const marginLeft = props.marginLeft ? props.marginLeft : ''

        return `
        border: 1px solid ${borderColor};
        padding: ${padding};
        margin-left: ${marginLeft};
        `
    }}
`

const Input = styled.input`
    color: white;
    background-color: var(--youtube-bg-color);
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 0 6px;
    width: 100%;
    height: 38px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-weight: 400;

    ${(props) => {
        const position = props.position ? props.position : ''
        const right = props.right ? props.right : ''

        return `
        position: ${position};
        right: ${right};
        `
    }}
`

const SearchImg = styled.img`
    width: 20px;
    position:relative;
    right: 22px;

    ${(props) => {
        const display = props.display ? props.display : 'none'
        
        return `
        display: ${display}
        `
    }}
`

const KeyboardBtn = styled(BasicButton)`
    padding: 0;
    position: relative;
    right: 2px;
    top: 2px;
`

const KeyboardImg = styled.img`
    width: 18px;

    &:hover{
        filter: brightness(130%);
    }
`

const SearchBtn = styled.button`
    background-color: #222222;
    width: 80px;
    height: 40px;
    border-radius: 0 40px 40px 0;
    border: 1px solid #313131;
`

const MicBtn = styled.button`
    position: relative;
    right: -6px;
    border-radius: 50%;
    background-color: #181818;
    width: 50px;
    height: 40px;
    
    &:hover{
        filter: brightness(200%);
    }
`

const SearchBtnImg = styled.img`
    width: 24px;
    height: 24px;
`

const MicImg = styled.img`
    position: relative;
    top: 2px;
    width: 22px;
`


const SearchComponent = () => {
    const [ hiddenIcon, setHiddenIcon ] = React.useState(true)

    const inputFocusEvent = () => {
        hiddenIcon ? setHiddenIcon(false) : setHiddenIcon(true)
    }

    return(
        <SearchBox>
            {
                // 기본
                hiddenIcon ? 
                <InnerBox marginLeft='40px'>
                    <SearchImg src={require('../../img/search.svg').default}/>
                    <Input onFocus={inputFocusEvent} onBlur={inputFocusEvent} placeholder='검색'/>
                    <KeyboardBtn>
                        <KeyboardImg src={require('../../img/keyboard.png')}/>
                    </KeyboardBtn>
                </InnerBox>
                :
                // 클릭했을 때
                <InnerBox borderColor='#1C62B9' padding='0 6px 0 40px'>
                    <SearchImg display='block' src={require('../../img/search.svg').default}/>
                    <Input position='relative' right='14px' onFocus={inputFocusEvent} onBlur={inputFocusEvent} placeholder='검색'/>
                    <KeyboardBtn>
                        <KeyboardImg src={require('../../img/keyboard.png')}/>
                    </KeyboardBtn>
                </InnerBox>
            }

            <SearchBtn>
                <SearchBtnImg src={require('../../img/search.svg').default}/>
            </SearchBtn>
            <MicBtn>
                <MicImg src={require('../../img/mic.png')}/>
            </MicBtn>
        </SearchBox>
    )

}


export default SearchComponent