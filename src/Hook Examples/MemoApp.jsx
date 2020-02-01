import React, { useState, useMemo, useCallback } from 'react';

import { useFetch } from './useFetch';

// import Callback from './Callback';
// import Square from './Square';

const App = () => {
  // const [count, setCount] = useState(0);
  // const favNums = [2, 3, 4, 5, 63];

  // const increment = useCallback(
  //   n => {
  //     setCount(prevCount => prevCount + n);
  //   },
  //   [setCount]
  // );

  // return (
  //   <div>
  //     <Callback increment={increment} />
  //     <div>count: {count} </div>
  //     {favNums.map(n => {
  //       return <Square increment={increment} n={n} key={n} />;
  //     })}
  //   </div>
  // );
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    'https://raw.githubusercontent.com/ajzbc/kayne.rest/master/quotes.json'
  );

  const computeLongestWord = useCallback(arr => {
    if (!arr) return [];
    let longestWord = '';

    console.log('computing longest word');

    arr.forEach(sentence =>
      sentence.split(' ').forEach(word => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      })
    );

    return longestWord;
  }, []);

  const longestWord = useMemo(() => computeLongestWord(data), [
    data,
    computeLongestWord
  ]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {longestWord}
    </div>
  );
};

export default App;
