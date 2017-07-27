import { combineReducers } from  'redux'
import urls from './urls'
import search_tag from './search_tag'

const rootReducer = combineReducers({
	search_tag,
	urls
})

export default rootReducer;
