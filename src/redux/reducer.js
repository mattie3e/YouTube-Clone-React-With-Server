import { createStore } from "redux"

const initState = {
    isOpen: true,
    selectNav: '홈',
    showDuration: true,
    thumbnailClick: false,
    // 백엔드 데이터 가져오기
    Contents: '',
    Subscribe: ''
}

const reducer = (state = initState, action) => {   
    switch (action.type) {
        case "OPEN_CLOSE":
            return {
                ...state,
                isOpen: (state.isOpen ? false : true)
            }
        
        case "SET_NAV":
            return {
                ...state,
                selectNav: action.data
            }

        case "THUMBNAIL_CLICK":
            return {
                ...state,
                thumbnailClick: (state.thumbnailClick ? false : true)
            }

        default:         
            return state
    }
}

const store = createStore(reducer)


export default store