import React from 'react'
import { useDispatch } from 'react-redux'
import { changeNav } from '../../redux/action'

const MiniNavComponent = (props) =>{
    const { setSelectedNav } = props

    const navMenuArr = [{'src':'home.svg', 'name':'홈'}, {'src':'shorts.png', 'name':'Shorts'}, {'src':'subscriptions.svg', 'name':'구독'}, {'src':'originals.svg', 'name':'Originals'}, {'src':'youtube_music.png', 'name':'YouTube Music'}, {'src':'video_library.svg', 'name':'보관함'}, {'src':'vertical_align_bottom.svg', 'name':'오프라인 저장 동영상'}]

    const dispatch = useDispatch()

    const clickNavEvent = (e) => {
        const target = e.target
        if (target.className == 'nav_item'){
            const value = target.children[1].innerHTML

            dispatch(changeNav(value))
        }
    }

    return(
        <nav className='mini_nav'>
            {
                navMenuArr.map((element, index) => {
                    return(
                        <div className='nav_item' key={index} onClick={clickNavEvent}>
                            <img className='nav_icon' src={require('../../img/' + element.src)}/>
                            <div>{element.name}</div>
                        </div>
                    )
                })
            }
        </nav>
    )

}


export default MiniNavComponent