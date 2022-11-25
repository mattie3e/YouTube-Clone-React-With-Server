import React from 'react'

const TempComponent = (props) => {
    const { text } = props
    
    return (
        <div className="temp">
            {text}
        </div>
    )
}


export default TempComponent