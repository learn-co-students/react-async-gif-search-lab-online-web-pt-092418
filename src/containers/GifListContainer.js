import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

  class GifListContainer extends Component {
    state = {
      gifsArr: []
    }

    render() {
      return (
        <div>
          <GifSearch searchGif={this.searchGif} />
          <GifList gifsArr = {this.state.gifsArr}/>
        </div>
      )
    }

    // componentDidMount() {
    //   fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
    //   .then(res => res.json())
    //   .then(json => this.setState({
    //     gifsArr: json.data.map(gif => ({url: gif.images.original.url}))
    //   }))
    // }

    searchGif = (query) => {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(json => this.setState({
        gifsArr: json.data.map(gif => ({url: gif.images.original.url}))
      }))
    }

  }

export default GifListContainer
