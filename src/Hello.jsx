import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';

const Hello = props => {
  // const renders = useRef(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count'))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  // console.log('hello renders: ', renders.current++);

  const [rect, divRef] = useMeasure(data);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div ref={divRef}>{loading ? '...loading' : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <button onClick={() => setCount(currentState => currentState + 1)}>
        Get New Fact
      </button>
      <div>Count 1: {count}</div>
    </div>
  );
};

export default Hello;
