import React, { Component } from 'react';
import MemoCopm from '../Memos/MemoCopm';
import PureComp from './PureComponent';
import RegularComponent from './RegularComponent';

class ParentComponent extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name: 'Nikitha'
     };
   };

   componentDidMount() {
      setInterval(() => {
         this.setState({name: 'Nikitha'})
      }, 2000)
   }
   
   render() {
      console.log('==> Parent component rendered')
      return (
         <div>
            Parent Component
            {/* <RegularComponent name={this.state.name}/>
            <PureComp name={this.state.name}/> */}
            <MemoCopm name={this.state.name}/>
         </div>
      );
   }
}

export default ParentComponent;