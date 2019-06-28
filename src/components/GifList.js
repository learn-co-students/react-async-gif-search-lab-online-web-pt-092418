import React, { Component } from 'react';

class GifList extends Component {
  render() {
    return (
      <div className="image">
        <ul>
          {this.props.images.map((image, index) =>
            {
              return (
                <li key={index}>
                  <img src={ image.original.url } alt={image.slug} />
                  <p>{ image.url}</p>
                </li>
              )
            })}
        </ul>
      </div>
        )
      }
    }

export default GifList;
