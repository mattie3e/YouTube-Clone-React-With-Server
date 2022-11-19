import React from 'react'


const MenuAndLogoComponent = (props) => {
    const { isOpen, setIsOpen } = props

    const logoClickEvent = () =>{
        document.location.reload()
    }
    
    const menuClickEvent = () =>{
        if (isOpen == undefined){
            // return 안에서 화면 너비 가져와서 if문으로 처리하는게 react 개발 방향이랑 맞을듯??????
            if (getComputedStyle(document.getElementsByClassName('wide_nav')[0]).display == 'none'){
                setIsOpen(true)
            }
            else{
                setIsOpen(false)
            }
        }
        else{
            // TF로 쓰기
            isOpen ? setIsOpen(false) : setIsOpen(true)
        }
        console.log(isOpen)
    }


    return(
        <React.Fragment>
            <div className='left_box'>
                <div className='menu_box'>
                    <button onClick={menuClickEvent}>
                        <img src={require('../img/menu.png')}/> 
                    </button>
                </div>
                <div className='logo_box'>
                    <img src={require('../img/YouTube_logo.png')} onClick={logoClickEvent}/>
                    <span>
                        KR
                    </span>
                </div>
            </div>
        </React.Fragment>
    )

}


export default MenuAndLogoComponent