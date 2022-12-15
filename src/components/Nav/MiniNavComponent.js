import React from 'react'
import { useDispatch } from 'react-redux'
import { changeNav } from '../../redux/action'

import { useSetRecoilState } from 'recoil'
import { selectNavState } from '../../recoil/youtubeState'

import styled from 'styled-components'
import { FlexBox, NavIcon } from '../../styled/Styled'

const MiniNav = styled.div`
    box-sizing: border-box;
    position: fixed;
    background-color: #0F0F0F;
    width: 64px;
    height: 100vh;
    padding: 60px 0 4px;

    @media (max-width: 800px){
        display: none;
    }
`

const MiniNavItem = styled(FlexBox)`
    flex-direction: column;
    align-items: center;
    padding: 16px 0 14px 0;
    margin: 0px;
    font-size: 10px;
    border-radius: 10px;

    &:hover{
        background-color: #272727;
    }
`

const IconName = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    text-align: center;
    color: white;
`

const MiniNavComponent = () =>{
    const navMenuArr = [{'src':'home.svg', 'name':'홈'}, {'src':'shorts.png', 'name':'Shorts'}, {'src':'subscriptions.svg', 'name':'구독'}, {'src':'originals.svg', 'name':'Originals'}, {'src':'youtube_music.png', 'name':'YouTube Music'}, {'src':'video_library.svg', 'name':'보관함'}, {'src':'vertical_align_bottom.svg', 'name':'오프라인 저장 동영상'}]

    //const dispatch = useDispatch()
    const setSelectNav = useSetRecoilState(selectNavState)


    const clickNavEvent = (e) => {
        const target = e.target
        if (target.className == 'nav_item'){
            const value = target.children[1].innerHTML

            setSelectNav(value)
        }
    }

    return(
        <MiniNav>
            {
                navMenuArr.map((element, index) => {
                    return(
                        <React.Fragment>
                            <MiniNavItem key={index} onClick={clickNavEvent}>
                                <NavIcon src={require('../../img/' + element.src)}/>
                                <IconName>{element.name}</IconName>
                            </MiniNavItem>
                        </React.Fragment>
                    )
                })
            }
        </MiniNav>
    )

}


export default MiniNavComponent