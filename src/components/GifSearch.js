import React, {Component} from 'react';


class GifSearch extends Component{ 
    
        state = {
          
        }
        handleSubmit = event => {
            this.setState({
                value: event.target.value
            });
        }
        render() {
          return (
            <form onSubmit={ event => this.handleSubmit(event) }>
              
              <input type="text"  />
            </form>
          )
        }
}  

export default GifSearch