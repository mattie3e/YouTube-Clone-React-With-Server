import React from 'react'

const useSetMain = () => {
    const [selectedNav, setSelectedNav] = React.useState('홈')

    // 이미 선택된 경우 제외
    const navSelectEvent = (e) => {
        const target = e.target

        if (target.className == 'nav_item'){
            if (target.children[1].innerHTML != selectedNav){
                setSelectedNav(target.children[1].innerHTML)
            }
        }
    }   
    console.log(selectedNav)

    return [selectedNav, navSelectEvent]
}

export default useSetMain 