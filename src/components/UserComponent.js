import React from 'react'


const UserComponent = () => {

    return(
        <div className='user_box'>
            <button className='add_video'>
                <img src={require('../img/add-video.png')}/>
            </button>
            <button className='notice'>
                <img src={require('../img/bell.png')}/>
            </button>
            <button className='profile'>
                <img src={'https://yt3.ggpht.com/yti/AJo0G0lvgY2OzTpHDZky-2wqGswsqJtGjuenkKGBPT9wYw=s88-c-k-c0x00ffffff-no-rj-mo'}/>
            </button>
        </div>
    )

}



export default UserComponent