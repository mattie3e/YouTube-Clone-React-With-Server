import React from 'react'
import { useDispatch } from 'react-redux' // state 가져오는 명령어
import { changeIsOpen } from "../../redux/action"

import { useRecoilState } from 'recoil'
import { isOpenState } from '../../recoil/youtubeState'

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
            <div className='left_box'>
                <div className='menu_box'>
                    <button onClick={menuClickEvent}>
                        <img src={require('../../img/menu.png')}/> 
                    </button>
                </div>
                <div className='logo_box'>
                    <img src={require('../../img/YouTube_logo.png')} onClick={logoClickEvent}/>
                    <span>
                        KR
                    </span>
                </div>
            </div>
        </React.Fragment>
    )

}


export default MenuAndLogoComponent