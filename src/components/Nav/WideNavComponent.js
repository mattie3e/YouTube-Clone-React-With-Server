import React from 'react'
import WideNavItemComponent from './WideNavItemComponent'
import WideNavSubscriptionComponent from './WideNavSubscriptionComponent'
import MenuAndLogoComponent from '../Header/MenuAndLogoComponent'

import { useDispatch, useSelector } from 'react-redux'
import { changeIsOpen } from '../../redux/action'

import { useRecoilValue, useRecoilState } from 'recoil'
import { isOpenState, subscriptionData } from '../../recoil/youtubeState'

import styled from 'styled-components'
import { NavItem } from '../../styled/Styled'


const WideNav = styled.div` 
    position: fixed;
    top: 56px;
    visibility: visible;
    box-sizing: border-box;
    background-color: #0F0F0F;
    width: 240px; 
    height: calc(100vh - 56px);
    padding: 12px 0 12px 0;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 10;

    @media (max-width: 800px){
        ${(props) => {
            const display = props.display ? props.display : ''
    
            return `
                display: ${display};
            `
        }}
    }

    ${(props) => {
        const display = props.display ? props.display : ''

        return `
            display: ${display};
        `
    }}
`

const BlackBox = styled.div`
    display: none;
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 240px;
    background-color: black;
    opacity: 0.5;
    overflow: hidden;

    @media screen and (max-width: 1312px){
        ${(props) => {
            const display = props.display ? props.display : 'block'
    
            return `
                display: ${display};
            `
        }}
    }
`

const Divide = styled.div`
    width: 100%;
    height: 1px;
    margin: 0 8px 0 12px;
    margin-top: 12px;
    margin-bottom: 12px;
    background-color:#1B1B1B;
    border-top: 1px solid #272727;
    pointer-events: none;
`


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
            <WideNav display={isOpen ? 'none' : ''}>
                {
                    navMenuArr1.map((element, index) => {
                    return <WideNavItemComponent key={index} data={element}/>
                    })
                }
                <Divide></Divide>
                {
                    navMenuArr2.map((element, index) => {
                        return <WideNavItemComponent key={index} data={element}/>
                    })
                }
                <Divide></Divide>
                <NavItem margin='16px 0 4px 12px'>
                    구독
                </NavItem>
                {
                    subscriptions.map((element, index) => {
                        return <WideNavSubscriptionComponent key={index} data={element}/>
                    })
                }
            </WideNav>
            <BlackBox display={isOpen ? 'none' : ''} onClick={menuClickEvent}></BlackBox>
        </React.Fragment>
    )

}


export default WideNavComponent