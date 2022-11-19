import React from 'react'


const SearchComponent = () => {
    const [ hiddenIcon, setHiddenIcon ] = React.useState(true)

    const inputFocusEvent = () => {
        hiddenIcon ? setHiddenIcon(false) : setHiddenIcon(true)
    }

    return(
        <div className='search_box'>
            <div className=
            {
             hiddenIcon ? 'search_inner_box' : 'extend_inner_box'
            }
            >
                <img className={hiddenIcon ? 'hidden_search_img' : 'visible_search_img'} src={require('../img/search.svg').default}/>
                <input onFocus={inputFocusEvent} onBlur={inputFocusEvent} placeholder='검색'/>
                <button className='keyboard_btn'>
                    <img src={require('../img/keyboard.png')}/>
                </button>
            </div>
            
            <button className='search_btn'>
                <img src={require('../img/search.svg').default}/>
            </button>
            <button className='mic_btn'>
                <img src={require('../img/mic.png')}/>
            </button>
        </div>
    )

}


export default SearchComponent