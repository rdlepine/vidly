import React, { Component } from 'react';

class Like  extends Component {
    


    render() { 
        let classes = 'fa fa-heart'
        if(this.props.liked === true) {
            classes += ""
        } else {
            classes += "-o"
        }
        return (
        
            <i className={classes} style={{cursor: 'pointer'}} aria-hidden="true>"></i>
          );
    }
}
 
export default Like;