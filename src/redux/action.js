const changeIsOpen = () => {
    return {
        type: "OPEN_CLOSE"
    }
}

const changeNav = (nav) => {
    return {
        type: "SET_NAV",
        data: nav
    }
}

const changeThumbnail = () => {
    return {
        type: "THUMBNAIL_CLICK"
    }
}

export {changeIsOpen, changeNav }