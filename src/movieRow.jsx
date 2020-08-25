import React, { Component } from 'react';
import './App.css';

class MovieRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieurl: ''
    };
    this.movieposter();
  }

  viewMovie = () => {
    const url = 'https://www.themoviedb.org/movie/' + this.props.movie.id;
    window.location.href = url;
  };

  movieposter = () => {
    if (this.props.movie.poster_src !== 'http://image.tmdb.org/t/p/w185null') {
      this.movieName = this.props.movie.poster_src;
    } else {
      this.movieName = 'defaultimage.png';
    }
    console.log(this.movieName);
  };

  render() {
    return (
      <div class='col s12 m7' style={{ backgroundColor: 'black' }}>
        <a href={'https://www.themoviedb.org/movie/' + this.props.movie.id}>
          <h2 class='header' style={{ color: 'rgb(245, 222, 80)' }}>
            {this.props.movie.title}
          </h2>
        </a>
        <div class='card horizontal' style={{ backgroundColor: 'black' }}>
          <div class='card-image'>
            <img
              src={this.movieName}
              alt={this.props.movie.title}
              style={{ width: 200 }}
            />
          </div>
          <div class='card-stacked'>
            <div class='card-content'>
              <p style={{ color: 'white' }}>
                <b style={{ color: 'rgb(245, 222, 80)' }}>Orignal Title: </b>
                {this.props.movie.original_title}
              </p>
              <br />
              <p style={{ color: 'white' }}>
                <b style={{ color: 'rgb(245, 222, 80)' }}>Plot: </b>
                {this.props.movie.overview}
              </p>
              <br />
              <p style={{ color: 'white' }}>
                <b style={{ color: 'rgb(245, 222, 80)' }}>Release Date: </b>
                {this.props.movie.release_date}
              </p>
              <br />
              <p style={{ color: 'white' }}>
                <b style={{ color: 'rgb(245, 222, 80)' }}>Vote Average: </b>
                {this.props.movie.vote_average * 10}%
              </p>
            </div>
            <div class='card-action'>
              <a
                href={'https://www.themoviedb.org/movie/' + this.props.movie.id}
                style={{ color: 'rgb(245, 222, 80)' }}
              >
                Click here for more details
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieRow;
