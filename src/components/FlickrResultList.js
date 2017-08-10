import React from 'react';
import FlickrResult from './FlickrResult';
import LoadingWheel from './LoadingWheel';


const FlickrResultList = ({urls,search_tag, searching}) => {
	let label = null;
	let spinner = null;

	if (search_tag && !searching) label = `Showing results for "${search_tag}"...`;
	if (searching) spinner = <LoadingWheel />;

	const items = urls.map((photo_url,i) => {
		return ( 
			<FlickrResult 
				key = {i}
				url = {photo_url} 
			/>
		);
	})

	return (
		<div>
			<div className="search-result-label text-center"><h4>{label}</h4></div>
			<div>{spinner}</div>
			<div className="search-result-list">{items}</div>
		</div>
	);
}

export default FlickrResultList;