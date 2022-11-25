import React from 'react'
import WideNavItemComponent from './WideNavItemComponent'
import WideNavSubscriptionComponent from './WideNavSubscriptionComponent'

import { useDispatch, useSelector } from 'react-redux'
import { changeIsOpen } from '../../redux/action'


const WideNavComponent = () =>{
    const navMenuArr1 = [{'src':'home.svg', 'name':'홈'}, {'src':'shorts.png', 'name':'Shorts'}, {'src':'subscriptions.svg', 'name':'구독'}, {'src':'originals.svg', 'name':'Originals'}, {'src':'youtube_music.png', 'name':'YouTube Music'}]

    const navMenuArr2 = [{'src':'video_library.svg', 'name':'보관함'}, {'src':'history.svg', 'name':'시청 기록'}, {'src':'my_video.svg', 'name':'내 동영상'}, {'src':'schedule.svg', 'name':'나중에 볼 동영상'}, {'src':'vertical_align_bottom.svg', 'name':'오프라인 저장 동영상'}, {'src':'thumb_up.svg', 'name':'좋아요 표시한 동영상'}, {'src':'expand_more.svg', 'name':'더보기'}]

    // 백엔드 가져오는 부분
    const subscriptions = [
        {'src':'https://yt3.ggpht.com/fx8GiOIS24VM3vofD3hUHxeB0LvMIesyryhjQreN6v9uy6nuHhFLEnccNWdx9GbhUArrdEzKxb0=s176-c-k-c0x00ffffff-no-rj', 'name':'EO 이오'},
        {'src':'https://yt3.ggpht.com/ytc/AMLnZu-OoCj8oG4hssfpUAvZ5EPCjBu21krVcB6tkVFsQA=s88-c-k-c0x00ffffff-no-rj', 'name':'침착맨'},
        {'src':'https://yt3.ggpht.com/ytc/AMLnZu_KptPhlZ024JCVEU_eptEnciU89Hp_MNcGL2Vl=s88-c-k-c0x00ffffff-no-rj', 'name':'슈카월드'},
        {'src':'https://yt3.ggpht.com/ytc/AMLnZu-FPJv66wbPdjQASHYZEprUYQOGgulX_HvVyj5c=s88-c-k-c0x00ffffff-no-rj', 'name':'안될과학 Unrealscience'},
        {'src':'https://yt3.ggpht.com/ytc/AMLnZu_3bGiwzX9iSbGaxKK8RnsKCezV4UFC365SLLLcSw=s88-c-k-c0x00ffffff-no-rj', 'name':'Wolf'}
    ]

    // const { isOpen, selectedNav, setSelectedNav } = props
    
    const dispatch = useDispatch()

    const isOpen = useSelector(state => state.isOpen)

    const setIsOpen = () => dispatch(changeIsOpen())

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
            <div className={isOpen!=undefined ? (isOpen ? 'block_box' : '') : ''} onClick={setIsOpen}></div>
        </React.Fragment>
    )

}


export default WideNavComponent