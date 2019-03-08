import React, { Component } from 'react'
import Like from './like'
import _ from 'lodash'

class TableBody extends Component {

  render() {

    const {data, onLike, onDelete, columns} = this.props

    return (
        <tbody>
        {
            data.map( (item, index) => <tr key={index}>
                {columns.map( (column, index) => <td key={index}>{_.get(item, column.path)}</td>)}
            </tr>)
        }
        </tbody>
     )
  }
}

export default TableBody
