function urls(state = [], action) {
	switch(action.type) {
		case 'UPDATE_URLS':
			return action.response.data.photos.photo.map(construct_url);
		case 'CLEAR_URLS':
			return [];
		default:
			return state;
	}
}

const photo_size = "c";
function construct_url(photo_data) {
	var url = `https://farm${photo_data.farm}.staticflickr.com/${photo_data.server}/${photo_data.id}_${photo_data.secret}_${photo_size}.jpg`;
	return url;
}

export default urls