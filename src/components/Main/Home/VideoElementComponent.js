import React from 'react'
import useVideoPreview from '../../../hooks/useVideoPreview'

import styled from 'styled-components'

const VideoElement = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
`

const DurationBox = styled.div`
    right: 0px;
    bottom: 0px;
    display:inline-block;
    position: absolute;
    background-color: rgb(0 0 0 / 80%);
    margin: 4px;
    padding: 1px 4px;
    border-radius: 4px;
`

const Duration = styled.div`
    position: relative;
    top:-1px;
    font-weight: 600;
    font-size: 0.8rem;
    background-color: transparent;
    color: white;

    ${(props) => {
        const hover = props.hover

        if (hover) {
        return `
            font-weight: 400;
            padding: 6px;
        `
        }
    }}
`

const Thumbnail = styled.img`
    position: absolute;
    width: 100%;
    height: auto;
    border-radius: 10px;
`


const VideoElementComponent = (props) => {
    // 렌더링 자주 일어남
    const { data, clickEvent } = props
    const { thumbnail_img, duration } = data

    const [eachDuration, setDuration] = useVideoPreview()

    return (
        <VideoElement>
            <Thumbnail src={thumbnail_img} onMouseOver={setDuration} onMouseOut={setDuration} onClick={clickEvent}/>
            <DurationBox>
                {
                    eachDuration ?
                    <Duration>{duration}</Duration>
                    :
                    <Duration hover='true'>
                        계속 마우스 오버하여 재생하기
                    </Duration>
                }
            </DurationBox>
        </VideoElement>
    )
}


export default VideoElementComponent