import React from 'react'

const GifList = props => {
    return (
        <div>
            {props.list.map(
                image => <img key={image.url} src={image.url} alt={image.slug}/>
            )}
        </div>
    )
};

export default GifList