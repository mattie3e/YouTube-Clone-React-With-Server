import React from 'react'
import useVideoPreview from '../../../hooks/useVideoPreview'


const VideoElementComponent = (props) => {
    // 렌더링 자주 일어남
    const { data, clickEvent } = props
    const { thumbnail_img, duration } = data

    const [eachDuration, setDuration] = useVideoPreview()

    return (
        <div className="video_element">
            <img src={thumbnail_img} className="video_thumbnail" onMouseOver={setDuration} onMouseOut={setDuration} onClick={clickEvent}/>
            <div className="video_duration_box">
                <div className={eachDuration ? 'video_duration' : 'video_duration video_duration_hover'}>{eachDuration ? duration : '계속 마우스 오버하여 재생하기'}</div>
            </div>
        </div>
    )
}


export default VideoElementComponent