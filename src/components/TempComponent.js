import React from 'react'

const TempComponent = (props) => {
    const { state } = props
    
    return (
        <div className="temp">
            {state}
        </div>
    )
}


export default TempComponent