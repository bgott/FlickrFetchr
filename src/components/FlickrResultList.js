import React from 'react';
import FlickrResult from './FlickrResult'


const FlickrResultList = ({urls,search_tag}) => {
	const items = urls.map((photo_url,i) => {
		return ( 
			<FlickrResult 
				key = {i}
				url = {photo_url} 
			/>
		);
	})

	let label = null;
	if (search_tag) {
		label = `Showing results for "${search_tag}"...`;
	}

	return (
		<div>
			<div className="search-result-label text-center">
				<h4>{label}</h4>
			</div>
			<div className="search-result-list">{items}</div>
		</div>
	);
}

export default FlickrResultList;