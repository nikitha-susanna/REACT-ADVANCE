import React from 'react';

function MemoCopm({name}) {
   console.log('Rendering MemoComp');
   return (
      <div>
         {name}
      </div>
   );
}

export default React.memo(MemoCopm);