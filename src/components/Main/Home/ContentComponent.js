import React from 'react'
import EachContent from './EachContent'

import { useSelector } from 'react-redux'


const ContentComponent = () => {
    // 백엔드에서 불러올 데이터 -> state에 넣어주기
    const contentData = useSelector(state => state.contents)

    return (
        <div className="contents_box">
            {
                contentData.map((element) =>{
                    // state 독립적으로 해주려고 컴포넌트 하나 더 나눔
                    return(
                        <EachContent element={element}/>
                    )
                })
            }
        </div>
    )
}


export default ContentComponent