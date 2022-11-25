import React from 'react'

import HeaderComponent from './components/Header/HeaderComponent'
import WideNavComponent from './components/Nav/WideNavComponent'
import MiniNavComponent from './components/Nav/MiniNavComponent'
import MainComponent from './components/Main/MainComponent'

const App = () => {
    //묶어주기
    return (
        <React.Fragment>
            <HeaderComponent/>
            <WideNavComponent/>
            <MiniNavComponent/>
            <MainComponent/> 
        </React.Fragment>
    )

}

export default App