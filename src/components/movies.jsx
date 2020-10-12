/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2020-09-21 16:20:44
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2020-09-22 12:30:03
 * @FilePath: \react2\vidly\src\components\movies.jsx
 */
import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
class Movies extends Component {
  state = {
    movies: getMovies(),
    attibutes: ['Title', 'Genre', 'Stock', 'Rate', ''],
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  render() {
    if (this.state.movies.length === 0) {
      return <p className="jumbotron">There are no movies in the database</p>;
    }
    return (
      <React.Fragment>
        <div align="center">
          <h1 align="left" style={{ width: '90%' }} className="jumbotron">
            showing {this.state.movies.length} movies in the database.
          </h1>
          <table className="table table-striped" style={{ width: '90%' }}>
            <thead>
              <tr>
                {this.state.attibutes.map((element) => {
                  return <th key={element}>{element}</th>;
                })}
              </tr>
            </thead>

            <tbody>
              {this.state.movies.map((movie) => {
                return (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger btn-sm"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
