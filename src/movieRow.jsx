import React, { Component } from 'react';
import './App.css';

class MovieRow extends Component {
  state = {};

  viewMovie = () => {
    const url = 'https://www.themoviedb.org/movie/' + this.props.movie.id;
    window.location.href = url;
  };
  render() {
    return (
      <div class='col s12 m7' style={{ backgroundColor: 'black' }}>
        <h2 class='header' style={{ color: 'rgb(245, 222, 80)' }}>
          {this.props.movie.title}
        </h2>
        <div class='card horizontal' style={{ backgroundColor: 'black' }}>
          <div class='card-image'>
            <img
              src={this.props.movie.poster_src}
              alt={this.props.movie.title}
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
