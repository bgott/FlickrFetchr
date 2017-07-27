import Axios from 'axios';

export const KEY = "50fbab2764e2743a7593f449203c2693";
export const FLICKR_API = "https://api.flickr.com/services/rest/?api_key=" + KEY + "&method=flickr.photos.search&format=json&nojsoncallback=1&tags=";
export const photo_size = "c"; // (large) 1600x1600 on longest side

/*
 * action types
 */

export const FETCH_DATA = "FETCH_DATA";
export const SEARCH_TAG = "SEARCH_TAG";
export const SUBMIT_SEARCH = "SUBMIT_SEARCH";
export const RETURN_SEARCH = "RETURN_SEARCH";

// export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
// export const SEARCH_FAILURE = "SEARCH_FAILURE";

/* 
 * action generators
 */

export function return_search(response = {}) {
	return { type: RETURN_SEARCH, response }
}

export function search_tag(tag = "") {
	return { type: SEARCH_TAG, tag }
}

/*
 * thunks
 */

export function fetch_data(tag = "") {
	return function (dispatch) {
		let query = FLICKR_API + tag;
		Axios.get(query)
			.then((response) => dispatch(return_search(response)));
	}
}


export function submit_search(tag = "") {
	return function (dispatch) {
		dispatch(search_tag(tag));
		dispatch(fetch_data(tag));
	}
}





