import React from 'react'
import styled from 'styled-components'
import { BasicButton, FlexBox } from '../../styled/Styled'

const UserBox = styled(FlexBox)`
    align-items: center;
`

const UserBoxBtn = styled(BasicButton)`
    padding: 0 16px;

    ${(props) => {
        const marginRight = props.marginRight ? props.marginRight : ''

        return `
        margin-right: ${marginRight}
        `
    }}
`

const BtnImg = styled.img`
    ${(props) => {
        const width = props.width ? props.width : ''
        const height = props.height ? props.height : ''
        const borderRadius = props.borderRadius ? props.borderRadius : ''

        return `
        width: ${width};
        height: ${height};
        border-radius: ${borderRadius};
        `
    }}
`


const UserComponent = () => {

    return(
        <UserBox>
            <UserBoxBtn>
                <BtnImg width='22px' height='22px' src={require('../../img/add-video.png')}/>
            </UserBoxBtn>
            <UserBoxBtn>
                <BtnImg width='20px' height='20px' src={require('../../img/bell.png')}/>
            </UserBoxBtn>
            <UserBoxBtn marginRight='12px'>
                <BtnImg width='32px' height='32px' borderRadius='50%' src={'https://yt3.ggpht.com/yti/AJo0G0lvgY2OzTpHDZky-2wqGswsqJtGjuenkKGBPT9wYw=s88-c-k-c0x00ffffff-no-rj-mo'}/>
            </UserBoxBtn>
        </UserBox>
    )

}



export default UserComponent