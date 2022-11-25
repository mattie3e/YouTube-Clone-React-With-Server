import React from 'react'
import { useDispatch } from 'react-redux' // state 가져오는 명령어
import { changeIsOpen } from "../../redux/action"


const MenuAndLogoComponent = () => {
    const logoClickEvent = () =>{
        document.location.reload()
    }
    
    const dispatch = useDispatch()
    const menuClickEvent = () => dispatch(changeIsOpen())


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