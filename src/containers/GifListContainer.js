import React from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
    state = { gifs: []};

    componentDidMount(){
        fetch('http://api.giphy.com/v1/gifs/search?q="dog"&api_key=dc6zaTOxFJmzC&rating=g') 
            .then(res => res.json())
            .then(json => this.setState({gifs: json.data.splice(0, 3)}))
    }
    getGifs(search) {
                fetch(`http://api.giphy.com/v1/gifs/search?q="${search}"&api_key=dc6zaTOxFJmzC&rating=g`) 
                    .then(res => res.json())
                    .then(json => this.setState({gifs: json.data.splice(0, 3)}));
            }
    render() {
        // return < gifs={this.state.gifs} />;
        console.log(this.state)
       return( 
           <div>
            <GifList gifs={this.state.gifs}>

            </GifList>
            
            <GifSearch doSearch={(search) => this.getGifs(search)}>

            </GifSearch>
            </div>
        ) }
}
export default GifListContainer; 
 