import React from 'react'
import styled from 'styled-components'

import { FlexDiv, Img } from '../../../styled/Styled'


const InfoBox = styled(FlexDiv)`
    flex-flow: row nowrap;
    flex: 1 0 36px;
`

const Title = styled.h1`
    color: white;
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

const DetailInfo = styled.h2`
    font-size: 12px;
    font-weight: 400;
    color: #AAAAAA;

    ${(props) => {
        const hoverBrightness = props.hoverBrightness ? props.hover : ''
        const hoverWeight = props.hoverWeight ? props.hoverWeight : ''
        const margin = props.margin ? props.margin : ''
        const afterContent = props.afterContent ? props.afterContent : ''

        return `
            &:hover{
                filter: brightness(${hoverBrightness});
                font-weight: ${hoverWeight};
            }

            ${props.afterContent ? 
                `&:after{
                content: ${"'" + afterContent + "'"};
                font-size: 10px;
                margin: 0px 4px;
                }`
                :
                ''
            }
            
            margin: ${margin}
        `
    }}
    
`

const Check = styled(Img)`
    filter: brightness(0) opacity(60%) invert(1);
`


const ContentInfoComponent = (props) => {
    const {data} = props
    const { title, channel_name, channel_img, view_rate, date_info, check_icon } = data

    return (
        <InfoBox width='100%' position='relative' padding='0 24px 0 10px' boxSizing='border-box'>
            <Img display='inline-block' borderRadius='50%' width='36px' height='36px' margin='12px 12px 0 0' src={channel_img}/>
            <FlexDiv flexDirection='column'>
                <Title>{title}</Title>
                {
                    check_icon ? 
                    <FlexDiv>
                        <DetailInfo margin='0px' hoverBrightness='2' hoverWeight='600'>{channel_name}</DetailInfo>
                        <Check width='14px' padding='0 0 0 4px' src={require('../../../img/check.svg').default}/>
                    </FlexDiv> :
                    <FlexDiv>
                        <DetailInfo margin='0px' hoverBrightness='2' hoverWeight='600'>{channel_name}</DetailInfo>
                    </FlexDiv>
                }
                <FlexDiv>
                    <DetailInfo margin='4px 0 0 0' afterContent='•'>{view_rate}</DetailInfo>
                    <DetailInfo margin='4px 0 0 0'>{date_info}</DetailInfo>
                </FlexDiv>
            </FlexDiv>
        </InfoBox>
    )
}

export default ContentInfoComponent