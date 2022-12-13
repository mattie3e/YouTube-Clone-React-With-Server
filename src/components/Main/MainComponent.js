import React from 'react'
import ContentComponent from './Home/ContentComponent'
import TempComponent from './TempComponent'

import { useSelector } from 'react-redux'

import { useRecoilValue } from 'recoil'
import { isOpenState, selectNavState } from '../../recoil/youtubeState'

import styled from 'styled-components'

const Main = styled.main`
    @media screen and (min-width: 1313px){
        ${(props) => {
            const padding = props.padding ? props.padding : '56px 0 0 240px'

            return `
            padding: ${padding}
            `
        }}
    }
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