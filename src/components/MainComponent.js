import React from 'react'
import ContentComponent from './ContentComponent'
import TempComponent from './TempComponent'


const MainComponent = (props) => {
    const { isOpen, selectedNav } = props

    
    return(
        <main className={isOpen!=undefined ? (isOpen ? 'open' : 'close') : ''}>
            {
                selectedNav == '홈' && <ContentComponent/>  || 
                selectedNav != '홈' && <TempComponent state={selectedNav}/> 
            }    
                
        </main>
    )

}

export default MainComponent