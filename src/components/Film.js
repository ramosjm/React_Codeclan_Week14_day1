import React, {Component} from 'react';

class Film extends Component{

  render(){
    return(
      <div className = "film">
      {console.log(this.props.children[3])}
      <a href = {this.props.children[3]}>
        <li>{this.props.children[1]}</li>
      </a>
      </div>
    );
  }
}

export default Film
