import React, {Component} from 'react'
import { getMovies } from '../services/fakeMovieService'
import Like from './common/like'


class Movie extends Component {

    state = {
        movies: [],
        liked: false,
    }

    componentDidMount() {
        this.setState({movies: getMovies()})
    }


    removeMovie = (_id) => {
       const {movies} = this.state

       let remainingMovies  = movies.filter( (movie) => movie._id !== _id)
       this.setState({movies: remainingMovies})
    }


    toggleLike = (movie) => {
      console.log(movie)
    }

    render() {

        const {movies} = this.state

        if(movies.length === 0) {
            return <p>There are no movies in the database</p>
        }

        return (
            <div>
                <h2>Showing {movies.length} Movies in the database</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map( (movie, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td><Like onClick={() => this.toggleLike(movie)} liked={this.state.liked} /></td>
                                        <td><button onClick={ () => this.removeMovie(movie._id)} className="btn btn-danger">Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Movie