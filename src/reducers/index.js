import { combineReducers } from  'redux'
import urls from './urls'
import search_tag from './search_tag'
import searching from './searching'

const rootReducer = combineReducers({
	search_tag,
	urls,
	searching
})

export default rootReducer;
