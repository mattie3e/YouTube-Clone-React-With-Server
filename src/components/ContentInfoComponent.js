import React from 'react'

const ContentInfoComponent = (props) => {
    const {data} = props
    const { title, channel_name, channel_img, view_rate, date_info, check_icon } = data

    return (
        <div className="content_info_box">
            <img src={channel_img} className="channel_img"/>
            <div className="video_info">
                <h1 className="content_title">{title}</h1>
                {
                    check_icon ? 
                    <div className="channel_name_box">
                        <h2 className="channel_name">{channel_name}</h2>
                        <img src={require('../img/check.svg').default} className="channel_check_img"/>
                    </div> :
                    <div className="channel_name_box">
                        <h2 className="channel_name">{channel_name}</h2>
                    </div>
                }
                <div className="etc_box">
                    <div className="view_rate">{view_rate}</div>
                    <div className="date_info">{date_info}</div>
                </div>
            </div>
        </div>
    )
}

export default ContentInfoComponent