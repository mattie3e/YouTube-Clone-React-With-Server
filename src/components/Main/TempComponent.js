import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    color: white;   
`

const TempComponent = (props) => {
    const { text } = props
    
    return (
        <Box>
            {text}
        </Box>
    )
}


export default TempComponent