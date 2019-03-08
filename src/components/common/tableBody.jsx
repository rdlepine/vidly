import React, { Component } from 'react'
import Like from './like'
import _ from 'lodash'

class TableBody extends Component {


  renderCell = (item, column) => {
      if(column.content) return column.content(item)

      return _.get(item, column.path)
  }

  render() {

    const {data, columns} = this.props

    return (
        <tbody>
        {
            data.map( (item, index) => <tr key={index}>
                {columns.map( (column, index) => <td key={index}>{this.renderCell(item, column)}</td>)}
            </tr>)
        }
        </tbody>
     )
  }
}

export default TableBody
