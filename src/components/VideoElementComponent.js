import React from 'react'


const VideoElementComponent = (props) => {
    // 렌더링 자주 일어남
    const { data } = props
    const { thumbnail_img, duration } = data

    const [eachDuration, setDuration] = React.useState(1)

    // 나중에 영상 썸네일 커질 때 Hook 만들어주기
    // 분리 안 하면 state 바뀔 때 밑에꺼도 렌더링됨
    const thumbnailOverEvent = (e) =>{
        setDuration(false)
    }
    
    const thumbnailOutEvent = (e) => {
        setDuration(true)   
    }

    return (
        <div className="video_element">
            <img src={thumbnail_img} className="video_thumbnail" onMouseOver={thumbnailOverEvent} onMouseOut={thumbnailOutEvent}/>
            <div className="video_duration_box">
                <div className={eachDuration ? 'video_duration' : 'video_duration video_duration_hover'}>{eachDuration ? duration : '계속 마우스 오버하여 재생하기'}</div>
            </div>
        </div>
    )
}


export default VideoElementComponent