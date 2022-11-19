import React from 'react'

const MiniNavComponent = (props) =>{
    const { selectedNav, setSelectedNav } = props

    const navMenuArr = [{'src':'home.svg', 'name':'홈'}, {'src':'shorts.png', 'name':'Shorts'}, {'src':'subscriptions.svg', 'name':'구독'}, {'src':'originals.svg', 'name':'Originals'}, {'src':'youtube_music.png', 'name':'YouTube Music'}, {'src':'video_library.svg', 'name':'보관함'}, {'src':'vertical_align_bottom.svg', 'name':'오프라인 저장 동영상'}]

    return(
        <nav className='mini_nav'>
            {
                navMenuArr.map((element, index) => {
                    return(
                        <div className='nav_item' key={index} onClick={setSelectedNav}>
                            <img className='nav_icon' src={require('../img/' + element.src)}/>
                            <div>{element.name}</div>
                        </div>
                    )
                })
            }
        </nav>
    )

}


export default MiniNavComponent