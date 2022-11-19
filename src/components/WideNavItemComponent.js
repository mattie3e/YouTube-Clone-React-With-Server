import React from 'react'

const WideNavItemComponent = (props) => {
    const { data, state } = props
    const { src, name } = data 

    return(
        <React.Fragment>
        {
            name == state && 
            <div className='nav_item selected'>
                <img className='nav_icon' src={require('../img/'+src)}/>
                <div className='nav_item_text'>
                    {name}
                </div>
            </div> ||
            name != state && 
            <div className='nav_item'>
                <img className='nav_icon' src={require('../img/'+src)}/>
                <div className='nav_item_text'>
                    {name}
                </div>
            </div>
        }
        </React.Fragment>
    )   
}


export default WideNavItemComponent