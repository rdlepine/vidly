import React, { Component } from 'react'

class Menu extends Component {

  render() {

    const {genres, selectedGenre, handleSelectGenre} = this.props

    return (
        <ul className="list-group">
            {
                genres.map( (genre, index) => {
                    return <li key={index} onClick={() => handleSelectGenre(genre._id)}
                            className={selectedGenre === genre._id?'list-group-item active':'list-group-item'}>{genre.name}</li>
                    })
            }
          
        </ul>
    )
  }
}

Menu.defaultProps = {
    textProperty: 'name',
    valueProperty: '-id'
}

export default Menu