import React from 'react';
import FlickrResult from './FlickrResult'


const FlickrResultList = ({urls}) => {
	const items = urls.map((photo_url,i) => {
		return ( 
			<FlickrResult 
				key = {i}
				url = {photo_url} 
			/>
		);
	})

	return (
		<div className="row">{items}</div>
	);
}

export default FlickrResultList;