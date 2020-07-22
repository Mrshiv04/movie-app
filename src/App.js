import React, { Component } from 'react';
import './App.css';
import TitleBar from './titleBars';
import InputBox from './inputBox';
import MovieRow from './movieRow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: [] };
    this.performSearch('iron-man');
  }

  searchChange = event => {
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  };

  async performSearch(searchTerm) {
    let response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=36447c7b2ef9127e8be63cfdcdbc59ca&query=${searchTerm}`
    );
    let data = await response.json();
    const result = data.results;
    console.log(result);
    var movieRows = [];
    if (result) {
      result.forEach(movie => {
        movie.poster_src = 'http://image.tmdb.org/t/p/w185' + movie.poster_path;
        const movieRow = <MovieRow key={movie.id} movie={movie} />;
        movieRows.push(movieRow);
      });
      this.setState({ rows: movieRows });
    }
  }

  render() {
    return (
      <div>
        <TitleBar />

        <div style={{ backgroundColor: 'black' }}>
          <InputBox searchChange={this.searchChange} />
          {this.state.rows}
        </div>
      </div>
    );
  }
}

export default App;
