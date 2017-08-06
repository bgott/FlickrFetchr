import React from 'react';
import FlickrResult from './FlickrResult';
import LoadingWheel from './LoadingWheel';


const FlickrResultList = ({urls,search_tag, searching}) => {
	let label = null;
	let spinner = null;
	let loading_list = "";

	if (search_tag && !searching) {
		label = `Showing results for "${search_tag}"...`;
	}
	if (searching) {
		spinner = <LoadingWheel />;
		loading_list = " loading-list";
	}

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
			<div className={"search-result-list" + loading_list}>{items}</div>
		</div>
	);
}

export default FlickrResultList;