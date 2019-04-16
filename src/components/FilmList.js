import React,{Component} from 'react';
import Film from './Film.js';

class FilmList extends Component{

  render(){
    const filmNodes = this.props.data.map(film=>{
      return(
        <Film key= {film.id}> {film.name} {film.url} </Film>
      );
    });
    return(
      <div>
        {filmNodes}
      </div>
    );
  }
}

export default FilmList;
