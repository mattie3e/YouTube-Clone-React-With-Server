import React from 'react'

import MenuAndLogoComponent from './MenuAndLogoComponent'
import SearchComponent from './SearchComponent'
import UserComponent from './UserComponent'


const HeaderComponent = (props) => {
    const { isOpen, setIsOpen } = props

    return (
        <header>
            <MenuAndLogoComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
            <SearchComponent/>
            <UserComponent/>
        </header>
    )
}


export default HeaderComponent