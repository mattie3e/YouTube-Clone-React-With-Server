import React from 'react'
import WideNavItemComponent from './WideNavItemComponent'
import WideNavSubscriptionComponent from './WideNavSubscriptionComponent'
import MenuAndLogoComponent from '../Header/MenuAndLogoComponent'

import { useDispatch, useSelector } from 'react-redux'
import { changeIsOpen } from '../../redux/action'

import { useRecoilValue, useRecoilState } from 'recoil'
import { isOpenState, subscriptionData } from '../../recoil/youtubeState'


const WideNavComponent = () =>{
    const navMenuArr1 = [{'src':'home.svg', 'name':'홈'}, {'src':'shorts.png', 'name':'Shorts'}, {'src':'subscriptions.svg', 'name':'구독'}, {'src':'originals.svg', 'name':'Originals'}, {'src':'youtube_music.png', 'name':'YouTube Music'}]

    const navMenuArr2 = [{'src':'video_library.svg', 'name':'보관함'}, {'src':'history.svg', 'name':'시청 기록'}, {'src':'my_video.svg', 'name':'내 동영상'}, {'src':'schedule.svg', 'name':'나중에 볼 동영상'}, {'src':'vertical_align_bottom.svg', 'name':'오프라인 저장 동영상'}, {'src':'thumb_up.svg', 'name':'좋아요 표시한 동영상'}, {'src':'expand_more.svg', 'name':'더보기'}]

    // 백엔드 가져오는 부분
    const subscriptions = useRecoilValue(subscriptionData)
    //const subscriptions = useSelector(state => state.subscribe)
    // const { isOpen, selectedNav, setSelectedNav } = props
    
    //const dispatch = useDispatch()

    //const isOpen = useSelector(state => state.isOpen)
    //const setIsOpen = () => dispatch(changeIsOpen())
    const [ isOpen, setIsOpen ] = useRecoilState(isOpenState)
    const menuClickEvent = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
        console.log(isOpen)
    } 

    return(
        <React.Fragment>
            <nav className={isOpen ? 'wide_nav open' : 'wide_nav close'}>
                {
                    navMenuArr1.map((element, index) => {
                    return <WideNavItemComponent key={index} data={element}/>
                    })
                }
                <div className='nav_divide'></div>
                {
                    navMenuArr2.map((element, index) => {
                        return <WideNavItemComponent key={index} data={element}/>
                    })
                }
                <div className='nav_divide'></div>
                <div className='nav_item subscription_text'>
                    구독
                </div>
                {
                    subscriptions.map((element, index) => {
                        return <WideNavSubscriptionComponent key={index} data={element}/>
                    })
                }
            </nav>
            <div className={isOpen!=undefined ? (isOpen ? 'block_box' : '') : ''} onClick={menuClickEvent}></div>
        </React.Fragment>
    )

}


export default WideNavComponent