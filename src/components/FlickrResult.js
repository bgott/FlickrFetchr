import React from 'react'

const FlickrResult = ({url}) => {
	return (
		<div className="search-result">
			<a href={url} target="_blank" className="thumbnail">
				<img src={url} alt="..." className="img-responsive"/>
			</a>
		</div>
	);
}

export default FlickrResult
