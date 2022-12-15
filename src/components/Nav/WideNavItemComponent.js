import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeNav } from '../../redux/action'

import { useRecoilState } from 'recoil'
import { selectNavState } from '../../recoil/youtubeState'

import styled from 'styled-components'
import { NavItem, NavIcon, NavText } from '../../styled/Styled'


const WideNavItemComponent = (props) => {
    const { data } = props
    const { src, name } = data 

    //const dispatch = useDispatch()
    
    //const selectedNav = useSelector(state => state.selectNav)
    const [ selectedNav, setSelectedNav ] = useRecoilState(selectNavState)

    const clickNavEvent = (e) => {
        const target = e.target

        if (target.id == 'navItem'){
            const value = target.children[1].innerHTML

            setSelectedNav(value)
            //dispatch(changeNav(value))
        }
    }

    return(
        <React.Fragment>
        {
            name == selectedNav && 
            <NavItem backgroundColor='#272727' id='navItem'>
                <NavIcon src={require('../../img/'+src)}/>
                <NavText>
                    {name}
                </NavText>
            </NavItem> ||
            name != selectedNav && 
            <NavItem onClick={clickNavEvent} id='navItem'>
                <NavIcon src={require('../../img/'+src)}/>
                <NavText>
                    {name}
                </NavText>
            </NavItem>
        }
        </React.Fragment>
    )   
}


export default WideNavItemComponent