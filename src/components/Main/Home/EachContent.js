import React from 'react'
import VideoElementComponent from './VideoElementComponent'
import ContentInfoComponent from './ContentInfoComponent'

const ContentComponent = (props) => {
    const { element } = props

    const [resizeState, setResizeState] = React.useState(false)

    const mouseClickEvent = () => {
        resizeState ? setResizeState(false) : setResizeState(true)
    }

    // 중복코드 지우기 , css로 조작 잘해보기
    return (
        <React.Fragment>
        {
            resizeState == false && 
            <div className="content">
                <VideoElementComponent data={element} clickEvent={mouseClickEvent}/> 
                <ContentInfoComponent data={element}/>
            </div>
            ||
            resizeState == true && 
            <div className="content">
                <div className="resize" onClick={mouseClickEvent}>
                    <VideoElementComponent data={element}/> 
                    <ContentInfoComponent data={element}/>
                    <div className='option_box'>
                        <div>
                            <img src={require('../../../img/schedule.svg').default}/>
                            나중에 볼 동영상
                        </div>
                        <div>
                            <img src={require('../../../img/add_playlist.svg').default}/>
                            현재 재생목록에 추가
                        </div>
                    </div>
                </div>
            </div> 
        }
        </React.Fragment>
    )
}


export default ContentComponent