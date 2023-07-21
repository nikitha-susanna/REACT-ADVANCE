import React, { Component } from 'react';

class RegularComponent extends Component {
   render() {
      console.log('==> Regular component rendered')
      return (
         <div>
         Regular Component {this.props.name}
         </div>
      );
   }
}

export default RegularComponent;