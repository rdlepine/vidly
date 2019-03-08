import React, {Component} from 'react'
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import Pagination from './common/pagination'
import * as utils from '../utils/paginate'
import Menu from './menu'
import MoviesTable from './moviesTable'
import _ from 'lodash'

class Movie extends Component {

    state = {
        movies: [],
        liked: false,
        pageSize: 4,
        currentPage: 1,
        genres: [],
        genre: '',
        sortColumn: {path: 'title', order: 'asc'}
    }

    componentDidMount() {
        const genres = [{name: 'All Genres'}, ...getGenres()]
        this.setState({movies: getMovies()})
        this.setState({genres})
    }


    removeMovie = (_id) => {
       const {movies} = this.state

       let remainingMovies  = movies.filter( (movie) => movie._id !== _id)
       this.setState({movies: remainingMovies})
    }


    toggleLike = (movie) => {

      const {movies} = this.state
      const index = movies.indexOf(movie)

      movies[index].liked = !movies[index].liked
      
      this.setState({movies})
    }

    getMovieByPage(goPage) {
      
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page})
    }

    handleSelectGenre = (genre) => {

        this.setState({genre,currentPage:1})
    }

    handleSort = (sortColumn) => {
      
        this.setState({sortColumn})
    }

    render() {

        const { pageSize, currentPage, genres, genre, sortColumn} = this.state
        
        let allMovies =[]

        if(genre) {
            allMovies = this.state.movies.filter( (movie) => movie.genre._id === genre)
        } else {
            allMovies = this.state.movies
        }

        const sorted = _.orderBy(allMovies, [sortColumn.path],[sortColumn.order])

        const movies = utils.paginate(sorted, currentPage, pageSize)

        if(movies.length === 0) {
            return <p>There are no movies in the database</p>
        }
 
      

        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Menu genres={genres} selectedGenre={genre} handleSelectGenre={this.handleSelectGenre}/>
                    </div>
                    <div className="col">
                        <h2>Showing {allMovies.length} Movies in the database</h2>
                        <MoviesTable onSort={this.handleSort} sortColumn={sortColumn} onDelete={this.onDelete} onLike={this.toggleLike} movies={movies} />
                        <Pagination 
                                itemsCount={allMovies.length}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={this.handlePageChange} />
                    </div>
                </div>
            </div>
        )
    }

}

export default Movie