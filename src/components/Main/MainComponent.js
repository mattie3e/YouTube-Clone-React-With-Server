import React from 'react'
import ContentComponent from './Home/ContentComponent'
import TempComponent from './TempComponent'

import { useSelector } from 'react-redux'

import { useRecoilValue } from 'recoil'
import { isOpenState, selectNavState } from '../../recoil/youtubeState'

import styled from 'styled-components'

const Main = styled.main`
    ${(props) => {
        const bg_color  = props.bg_color ? props.bg_color : '#0F0F0F'
        return `
            background_color : ${bg_color};
        `
    }}
`

const MainComponent = () => {
    //const isOpen = useSelector(state => state.isOpen)
    //const selectNav = useSelector(state => state.selectNav)
    
    const isOpen = useRecoilValue(isOpenState)
    const selectNav = useRecoilValue(selectNavState)

    return(
        <Main className={isOpen ? 'open' : 'close'}>
            {
                selectNav == '홈' && <ContentComponent/>  || 
                selectNav != '홈' && <TempComponent text={selectNav}/> 
            }    
        </Main>
    )

}

export default MainComponent