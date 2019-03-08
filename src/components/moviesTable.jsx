import React, {Component} from 'react'
import TableHeader from './common/tableHeader'
import TableBody from './common/tableBody'

class MoviesTable extends Component {
   
   columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'like',
        content: <Like movie => liked={movie.liked} this.props.onClick={ () => this.props.onLike(movie)} /> },
        {key: 'delete',
        content: <button onClick={ () => this.props.onDelete(movie)} >Delete</button> },
      
        
   ]

   render () {
        const {movies, onDelete, onLike, onSort, sortColumn} = this.props
        return (
            <div>
                <table className="table">
                    <TableHeader columns={this.columns} sortColumn={sortColumn}  onSort={onSort} />
                    <TableBody onLike={onLike} onDelete={onDelete} data={movies} columns={this.columns} />
                </table>
            </div>
        )
    }
}

export default MoviesTable