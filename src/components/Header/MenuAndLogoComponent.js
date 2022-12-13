import React from 'react'
import { useDispatch } from 'react-redux' // state 가져오는 명령어
import { changeIsOpen } from "../../redux/action"

import { useRecoilState } from 'recoil'
import { isOpenState } from '../../recoil/youtubeState'

import styled from 'styled-components'
import { BasicButton, FlexBox, BtnImg } from '../../styled/Styled'

const MenuBox = styled.div`
    width: 40px;
`

const MenuBtn = styled(BasicButton)`
    margin-top: 10px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    transition: all 0.3s ease-out;

    &:active{  
        background-color: #373737;
    }
`

const LogoBox = styled.div`
    box-sizing: border-box;
    position: relative;
    bottom: -2px;
    padding: 18px 14px 18px 16px;

    &:hover{
        cursor: pointer;
    }
`

const Img = styled(BtnImg)`
    top: 2px;
    width: 18px;
    height: 20px;
`

const Span = styled.span`
    color: #aaa;
    font-size: 10px;
    position: relative;
    bottom: 20px;
    right: -2px;
`

const LogoImg = styled.img`
    width: 97px;
    height: fit-content;
`

const MenuAndLogoComponent = () => {
    const logoClickEvent = () =>{
        document.location.reload()
    }
    
    //const dispatch = useDispatch()
    //const menuClickEvent = () => dispatch(changeIsOpen())

    const [ isOpen, setIsOpen ] = useRecoilState(isOpenState)
    const menuClickEvent = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
        console.log(isOpen)
    } 


    return(
        <React.Fragment>
            <FlexBox>
                <MenuBox>
                    <MenuBtn onClick={menuClickEvent}>
                        <Img src={require('../../img/menu.png')}/> 
                    </MenuBtn>
                </MenuBox>
                <LogoBox>
                    <LogoImg src={require('../../img/YouTube_logo.png')} onClick={logoClickEvent}/>
                    <Span>
                        KR
                    </Span>
                </LogoBox>
            </FlexBox>
        </React.Fragment>
    )

}


export default MenuAndLogoComponent