import React from 'react'

import HeaderComponent from './components/HeaderComponent'
import WideNavComponent from './components/WideNavComponent'
import MiniNavComponent from './components/MiniNavComponent'
import MainComponent from './components/MainComponent'
import useSetMain from './hooks/useSetMain'

const App = () => {
    const [ isOpen, setIsOpen ] = React.useState()
    const [ selectedNav, setSelectedNav] = useSetMain() //default='홈'


    return (
        <React.Fragment>
            <HeaderComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
            <WideNavComponent isOpen={isOpen} selectedNav={selectedNav} setSelectedNav={setSelectedNav}/>
            <MiniNavComponent selectedNav={selectedNav} setSelectedNav={setSelectedNav}/>
            <MainComponent isOpen={isOpen} selectedNav={selectedNav} setSelectedNav={setSelectedNav}/> 
        </React.Fragment>
    )

}

export default App