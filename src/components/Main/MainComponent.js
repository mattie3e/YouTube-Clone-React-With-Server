import React from 'react'
import ContentComponent from './Home/ContentComponent'
import TempComponent from './TempComponent'

import { useSelector } from 'react-redux'

const MainComponent = () => {
    const isOpen = useSelector(state => state.isOpen)
    const selectNav = useSelector(state => state.selectNav)
    
    return(
        <main className={isOpen ? 'open' : 'close'}>
            {
                selectNav == '홈' && <ContentComponent/>  || 
                selectNav != '홈' && <TempComponent text={selectNav}/> 
            }    
                
        </main>
    )

}

export default MainComponent