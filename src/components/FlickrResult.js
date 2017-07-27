import React from 'react'

const FlickrResult = ({url}) => {
	console.log("creating a FlickrResult with url: " + url);
	return (
		<div className="col-md-4">
			<a href={url} target="_blank" className="thumbnail">
				<img src={url} alt="..." className="img-responsive"/>
			</a>
		</div>
	);
}

export default FlickrResult
