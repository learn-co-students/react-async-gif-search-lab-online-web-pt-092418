import React, { Component } from 'react';

const GifList = props => {
  console.log(props);
  return (
    <div>
        {props.images.map(image => <img key={image.url} src={image.url} alt={image.slug}/>)}
    </div>
  )
}

export default GifList;
