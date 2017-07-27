import React from 'react';

const UrlsTemp = ({urls}) => {
  const urlItems = urls.map((photo_url, index) => {
    return(
      <li key={index}><img src={photo_url} alt="#"/></li>
    );
  });

  return (
    <ul className="url-list">{urlItems}</ul>
  );
};

export default UrlsTemp;