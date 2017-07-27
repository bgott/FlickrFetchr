const search_tag = (state = "", action) => {
    switch (action.type) {
        case 'SEARCH_TAG':
            return action.tag
        default:
            return state
    }
}

export default search_tag
