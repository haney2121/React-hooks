import React from 'react';

// import { useCountRenders } from './useCountRenders';

const Callback = React.memo(({ increment }) => {
  // useCountRenders();

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
});
export default Callback;
