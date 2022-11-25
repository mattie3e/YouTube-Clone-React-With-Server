import React from 'react'

import MenuAndLogoComponent from './MenuAndLogoComponent'
import SearchComponent from './SearchComponent'
import UserComponent from './UserComponent'


const HeaderComponent = (props) => {

    return (
        <header>
            <MenuAndLogoComponent/>
            <SearchComponent/>
            <UserComponent/>
        </header>
    )
}


export default HeaderComponent