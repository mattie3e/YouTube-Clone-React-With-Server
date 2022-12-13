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


const VideoElementComponent = (props) => {
    // 렌더링 자주 일어남
    const { data, clickEvent } = props
    const { thumbnail_img, duration } = data

    const [eachDuration, setDuration] = useVideoPreview()

    return (
        <VideoElement>
            <img src={thumbnail_img} className="video_thumbnail" onMouseOver={setDuration} onMouseOut={setDuration} onClick={clickEvent}/>
            <DurationBox>
                <div className={eachDuration ? 'video_duration' : 'video_duration video_duration_hover'}>{eachDuration ? duration : '계속 마우스 오버하여 재생하기'}</div>
            </DurationBox>
        </VideoElement>
    )
}


export default VideoElementComponent