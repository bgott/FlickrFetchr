import Axios from 'axios';

export const KEY = "50fbab2764e2743a7593f449203c2693";
export const FLICKR_API = "https://api.flickr.com/services/rest/?api_key=" + KEY + "&method=flickr.photos.search&format=json&nojsoncallback=1&tags=";
export const photo_size = "c"; // (large) 1600x1600 on longest side

/*
 * action types
 */

export const SEARCH_TAG = "SEARCH_TAG";
export const RETURN_SEARCH = "RETURN_SEARCH";
export const CLEAR_URLS = "CLEAR_URLS";
export const UPDATE_URLS = "UPDATE_URLS";

export const START_SEARCH = "START_SEARCH";
export const STOP_SEARCH = "STOP_SEARCH";

// export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
// export const SEARCH_FAILURE = "SEARCH_FAILURE";

/* 
 * action generators
 */

export function update_urls(response = {}) {
	return { type: UPDATE_URLS, response }
}

export function search_tag(tag = "") {
	return { type: SEARCH_TAG, tag }
}

export function clear_urls() {
	return { type: CLEAR_URLS }
}

export function start_search() {
	return { type: START_SEARCH }
}

export function stop_search() {
	return { type: STOP_SEARCH }
}

/*
 * thunks
 */

export function return_search(response) {
	return function (dispatch) {
		dispatch(stop_search());
		dispatch(update_urls(response));
	}	
}

export function fetch_data(tag = "") {
	return function (dispatch) {
		let query = FLICKR_API + tag;
		Axios.get(query)
			.then((response) => dispatch(return_search(response)));
	}
}


export function submit_search(tag = "") {
	return function (dispatch) {
		dispatch(start_search());
		dispatch(clear_urls());
		dispatch(search_tag(tag));
		dispatch(fetch_data(tag));
	}
}





