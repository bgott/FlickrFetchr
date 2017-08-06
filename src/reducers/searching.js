const searching = (state = false, action) => {
    switch (action.type) {
        case 'START_SEARCH':
            return true
        case 'STOP_SEARCH':
        	return false
        default:
            return state
    }
}

export default searching
