import React from 'react'
import MovieList from "./MovieList"
import { Grid, Row, Col } from "react-styled-flexboxgrid";

class SearchMovie extends React.Component {
  constructor() {
    super()

    this.state = {
      keyword: '',
      movies: []
    }
    this.initialize();
  }

  keywordChanged = event => this.setState({ keyword: event.target.value })

  renderMovies = (response) => {
    this.setState({
      movies: response
    })
  }

  initialize = () =>
    fetch("http://www.omdbapi.com/?apikey=21f42ce0&s=this&y=2020")
      .then(response => response.json())
      .then(response => this.renderMovies(response.Search))



  movieSearch = () =>
    fetch(`http://www.omdbapi.com/?apikey=21f42ce0&s=${this.state.keyword}`)
      .then(response => response.json())
      .then(response => this.renderMovies(response.Search))

  render() {
    return (
      <div>
        <div className="search-input" >
          <div className="input-group">
            <input value={this.state.keyword}
              onChange={this.keywordChanged} className="form-control" placeholder="Search Your Movie Here" />
            <div className="input-group-append">
              <button onClick={this.movieSearch} className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
        <Grid>
          <Row center="xs">
            {this.state.movies.map(
              (movie, index) => {
                console.log(index,movie)
                return (
                  <Col xs={12} md={6} lg={4} key={index} style={{ margin: "auto" }}>
                    <MovieList
                      image={movie.Poster}
                      title={movie.Title}
                      year={movie.Year}
                      type={movie.Type}
                    />
                  </Col>
                );
              })}
          </Row>
        </Grid>
      </div>
    )
  }
}
export default SearchMovie;