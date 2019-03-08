import React, { Component } from 'react'


class TableHeader extends Component {
   
    //columns array
    
   
    raiseSort = (path) => {
        const {sortColumn} = this.props
        if(path === sortColumn.path) {
            sortColumn.order = (sortColumn.order === 'asc')?'desc':'asc'
        } else {
            sortColumn.path = path;
            sortColumn.order = 'asc'
        }

        this.props.onSort(sortColumn)
    }

    render() { 
        const {columns} = this.props
        return (
            <thead>
                <tr>
                {
                    columns.map( (column, index) => <th key={index} onClick={() => this.raiseSort(column.path)}>{column.label}</th>)
                }
                </tr>
            </thead>
          );
    }
}
 
export default TableHeader;