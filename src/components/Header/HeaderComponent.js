import React from 'react'

import MenuAndLogoComponent from './MenuAndLogoComponent'
import SearchComponent from './SearchComponent'
import UserComponent from './UserComponent'

import styled from 'styled-components'
import { FlexBox } from '../../styled/Styled'

const HeaderStyle = styled.header`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    width: 100%;
    height: 56px;
    background-color: #0F0F0F;
    position: fixed;
    z-index: 1;
`


const HeaderComponent = (props) => {

    return (
        <HeaderStyle>
            <MenuAndLogoComponent/>
            <SearchComponent/>
            <UserComponent/>
        </HeaderStyle>
    )
}


export default HeaderComponent