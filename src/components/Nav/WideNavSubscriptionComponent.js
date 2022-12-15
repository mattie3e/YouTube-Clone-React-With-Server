import React from 'react'
import styled from 'styled-components'
import { NavItem, NavText } from '../../styled/Styled'


const SubImg = styled.img`
    border-radius: 50%; 
    width: 24px;
`


const WideNavSubscriptionComponent = (props) => {
    const {data} = props
    const { src, name } = data

    return (
        <NavItem>
            <SubImg src={src}/>
            <NavText>{name}</NavText>
        </NavItem>
    )

}


export default WideNavSubscriptionComponent