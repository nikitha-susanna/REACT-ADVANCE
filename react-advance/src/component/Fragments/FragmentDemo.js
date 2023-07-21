import React from 'react';

function FragmentDemo(props) {
   const Fragment = () => {
      return (
        <React.Fragment>
          <h1 style={{color:'royalblue'}}> Hello I'm a fregmant inside the same component</h1>
        </React.Fragment>
      )
    }
   return (
      <React.Fragment>
         <h1>Fragment Demo</h1>
         <p>This describes the Fragment demo component</p>
         <Fragment/>
      </React.Fragment>
   );
}

export default FragmentDemo;