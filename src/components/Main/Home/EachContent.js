import React from 'react'
import VideoElementComponent from './VideoElementComponent'
import ContentInfoComponent from './ContentInfoComponent'

import styled from 'styled-components'
import { FlexBox } from '../../../styled/Styled'

const Content = styled(FlexBox)`
    position: relative;
    flex-flow: column wrap;
    flex: 1 1 20%;
    color: white;
    font-size: 14px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 40px;
    min-width: 240px;
    max-width: 360px;
    cursor: pointer;
`

const ExpandContent = styled(FlexBox)`
    flex-direction: column;
    z-index: 2022;
    position: absolute;
    top: -14px;
    width: 360px;
    height: fit-content;
    background-color: #202020;
    border-radius: 10px;
`

const OptionBox = styled(FlexBox)`
    flex-direction: column;
    padding: 10px 10px 0 10px;
    box-sizing: border-box;
`

const OptionInnerBox = styled(FlexBox)`
    justify-content: center;
    background-color: #373737;
    width: 100%;
    padding: 6px 10px;
    border-radius: 30px;
    margin-bottom: 10px;
    box-sizing: border-box;
`

const OptionIcon = styled.img`
    filter: brightness(0) invert(1);
    width: 24px;
    height: fit-content;
    margin-right: 6px;
`


const ContentComponent = (props) => {
    const { element } = props

    const [resizeState, setResizeState] = React.useState(false)

    const mouseClickEvent = () => {
        resizeState ? setResizeState(false) : setResizeState(true)
    }

    return (
        <React.Fragment>
        {
            resizeState == false && 
            <Content>
                <VideoElementComponent data={element} clickEvent={mouseClickEvent}/> 
                <ContentInfoComponent data={element}/>
            </Content>
            ||
            resizeState == true && 
            <Content>
                <ExpandContent onClick={mouseClickEvent}>
                    <VideoElementComponent data={element}/> 
                    <ContentInfoComponent data={element}/>
                    <OptionBox>
                        <OptionInnerBox>
                            <OptionIcon src={require('../../../img/schedule.svg').default}/>
                            나중에 볼 동영상
                        </OptionInnerBox>
                        <OptionInnerBox>
                            <OptionIcon src={require('../../../img/add_playlist.svg').default}/>
                            현재 재생목록에 추가
                        </OptionInnerBox>
                    </OptionBox>
                </ExpandContent>
            </Content> 
        }
        </React.Fragment>
    )
}


export default ContentComponent