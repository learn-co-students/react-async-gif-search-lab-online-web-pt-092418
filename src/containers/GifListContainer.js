import React from 'react'

class GifListContainer extends React.Component {
    state = { gifs: []};

    componentDidMount(){
        fetch('http://api.giphy.com/v1/gifs/search?q="dog"&api_key=dc6zaTOxFJmzC&rating=g') 
            .then(res => res.json())
            .then(json => this.setState({gifs: json.data.splice(0, 3)}))
    }
    render() {
        // return < gifs={this.state.gifs} />;
        console.log(this.state)
       return( 
            <div>Hello </div>
       )
      }
}
export default GifListContainer; 
 