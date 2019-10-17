import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { get } from 'https';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.getSearchedMovie(URL+`&query=${this.state.searchTerm}`)
  }

  handleChange = (event) => this.setState({searchTerm: event.target.value})

  getSearchedMovie = (url) => {
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(movies => this.setState({reviews: movies.results}))
  }



  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}></input>
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}