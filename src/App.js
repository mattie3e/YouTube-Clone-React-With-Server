import React from 'react'

import HeaderComponent from './components/Header/HeaderComponent'
import WideNavComponent from './components/Nav/WideNavComponent'
import MiniNavComponent from './components/Nav/MiniNavComponent'
import MainComponent from './components/Main/MainComponent'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        background-color: #0F0F0F;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`


const App = () => {
    //묶어주기
    return (
        <React.Fragment>
            <GlobalStyle/>
            <HeaderComponent/>
            <WideNavComponent/>
            <MiniNavComponent/>
            <MainComponent/>
        </React.Fragment>
    )

}

export default App