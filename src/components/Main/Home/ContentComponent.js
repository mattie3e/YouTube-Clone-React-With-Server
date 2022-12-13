import React from 'react'
import EachContent from './EachContent'

import { useSelector } from 'react-redux'

import { useRecoilValue } from 'recoil'
import { contentData } from '../../../recoil/youtubeState'

import styled from 'styled-components'

const ContentsBox = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    margin-left: 20px;
    margin-right: 20px;
    margin-top:24px;
`



const ContentComponent = () => {
    // 백엔드에서 불러올 데이터 -> state에 넣어주기
    //const contentData = useSelector(state => state.contents)

    const contents = useRecoilValue(contentData)

    return (
        <ContentsBox>
            {
                contents.map((element) =>{
                    // state 독립적으로 해주려고 컴포넌트 하나 더 나눔
                    return(
                        <EachContent element={element}/>
                    )
                })
            }
        </ContentsBox>
    )
}


export default ContentComponent