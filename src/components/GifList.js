import React, {Component} from 'react';


class GifList extends Component{ 
    render(){
    const list = this.props.gifs.map((gif, i) => {
      return(  <li key={gif.id}><img src={gif.url} alt="great gifs"/> </li>
    )});
        return (
            <ul>
                {list}
            </ul>
        )
    }
}
export default GifList