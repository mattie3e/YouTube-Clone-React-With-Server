import React from 'react'

import styled from 'styled-components'
import { FlexBox } from '../../../styled/Styled'

const InfoBox = styled(FlexBox)`
    flex-flow: row nowrap;
    flex: 1 0 36px;
    width: 100%;
    position: relative;
    padding-right: 24px;
    box-sizing: border-box;
`

const ChannelImg = styled.img`
    display: inline-block;
    border-radius: 50%;
    width:36px;
    height: 36px;
    margin: 12px 12px 0 0;
`

const Title = styled.h1`
    width: 100%;
    font-weight: 600;
    font-size: 14px;
    margin: 12px 0 10px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
`


const ContentInfoComponent = (props) => {
    const {data} = props
    const { title, channel_name, channel_img, view_rate, date_info, check_icon } = data

    return (
        <InfoBox>
            <ChannelImg src={channel_img}/>
            <FlexBox flexDirection='column'>
                <Title>{title}</Title>
                {
                    check_icon ? 
                    <div className="channel_name_box">
                        <h2 className="channel_name">{channel_name}</h2>
                        <img src={require('../../../img/check.svg').default} className="channel_check_img"/>
                    </div> :
                    <div className="channel_name_box">
                        <h2 className="channel_name">{channel_name}</h2>
                    </div>
                }
                <div className="etc_box">
                    <div className="view_rate">{view_rate}</div>
                    <div className="date_info">{date_info}</div>
                </div>
            </FlexBox>
        </InfoBox>
    )
}

export default ContentInfoComponent