import React, { Component } from 'react';
import FilmTable from './containers/FilmTable';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className = "imdb-content">
      <FilmTable/>
      <hr></hr>
      <button className = "button">
        <a href = "https://www.imdb.com/calendar/?region=gb"> View more upcoming releases >> </a>
      </button>
    </div>
    );
  }
}

export default App;
