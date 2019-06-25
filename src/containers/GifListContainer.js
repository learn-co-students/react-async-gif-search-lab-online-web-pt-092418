import React, { Component } from 'react';
import GifList from '../components/GifList';

  class GifListContainer extends Component {
    state = {
      gifsArr: []
    }

    render() {
      return (
        <div>
          <GifList gifsArr = {this.state.gifsArr}/>
        </div>
      )
    }

    componentDidMount() {
      fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
      .then(res => res.json())
      .then(json => this.setState({
        gifsArr: json.data.map(gif => ({url: gif.images.original.url}))
      }))
    }

  }

export default GifListContainer
