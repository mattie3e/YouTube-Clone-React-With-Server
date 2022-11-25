import React from 'react'


const WideNavSubscriptionComponent = (props) => {
    const {data} = props
    const { src, name } = data

    return (
        <div className='nav_item'>
            <img className='subscription' src={src}/>
            <div className="nav_item_text">{name}</div>
        </div>
    )

}


export default WideNavSubscriptionComponent