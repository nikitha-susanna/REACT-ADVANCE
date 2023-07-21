import React, { Component } from 'react';

class RefsDemo extends Component {
   constructor(props) {
     super(props)
      this.inputref = React.createRef()
      // this is how we use call back refs
      this.cbRef = null
      this.setCbRef = (element) => {
         this.cbRef = element
      }
     this.state = {
        
     };
   };

   componentDidMount(){
      // this.inputref.current.focus()
      // console.log(this.inputref)
      if(this.cbRef) {
         this.cbRef.focus()
      }
   }

   clickEventHandler = () => {
      alert(this.inputref.current.value)
   }
   
   render() {
      return (
         <div>
            <input type="text" ref={this.inputref}/>
            <input type="text" ref={this.setCbRef}/>
            <button onClick={() => {this.clickEventHandler()}}>Click</button>
         </div>
      );
   }
}

export default RefsDemo;