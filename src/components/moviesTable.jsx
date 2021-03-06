import React, {Component} from 'react'
import TableHeader from './common/tableHeader'
import TableBody from './common/tableBody'
import Like from './common/like'

class MoviesTable extends Component {
   
   columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'like',
         content: movie => (<Like liked={movie.liked} onClick={ () => this.props.onLike(movie)} />) },
        {key: 'delete',
        content: movie => (<button className="btn btn-danger" onClick={ () => this.props.onDelete(movie)} >Delete</button>) },
      
        
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