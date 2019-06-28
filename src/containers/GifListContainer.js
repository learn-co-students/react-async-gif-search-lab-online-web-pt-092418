import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {images: []};

  fetchGifs = (query) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}` + '&api_key=dc6zaTOxFJmzC&rating=g'
    fetch(url)
      .then(response => response.json())
      .then(images => {
        console.log(images)
        this.setState({ images })
      })
    }


  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList images={this.state.images}/>
      </div>
    )
  }
}

export default GifListContainer;
