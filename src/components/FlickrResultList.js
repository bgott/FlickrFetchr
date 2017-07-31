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

	return (
		<div className="search-result-list">{items}</div>
	);
}

export default FlickrResultList;