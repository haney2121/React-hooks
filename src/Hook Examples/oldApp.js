import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

import Hello from './Hello';

import { useForm } from './useForm';
import { useModal } from './useModal';
// import { useFetch } from './useFetch';

//bunch of loop logic
// function expensiveIntialState() {
//   return 10;
// }

const App = props => {
  //inital value
  // const [count, setCount] = useState(() => expensiveIntialState());
  // const [count, setCount] = useState(() =>
  //   JSON.parse(localStorage.getItem('count'))
  // );
  // const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  //custom hook
  const [values, handleChange] = useForm({
    email: '',
    password: ''
  });
  const [toggleHello, setToggleHello] = useModal(false);
  // const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  const inputRef = useRef(null);

  // useEffect(() => {
  //   console.log('render');
  //   return () => {
  //     console.log('dismount');
  //   };
  // }, [values.email]);

  // useEffect(() => {
  //   localStorage.setItem('count', JSON.stringify(count));
  // }, [count]);

  return (
    <div>
      {/* <button onClick={() => setCount(currentState => currentState + 1)}>
        +
      </button> */}
      {/* {loading ? '...loading' : <p>{data}</p>} */}
      <button onClick={setToggleHello}>Toggle</button>
      {toggleHello && <Hello />}
      {/* <div>Count 1: {count}</div> */}
      {/*      <div>Count 2: {count2}</div> */}
      <input
        name='email'
        ref={inputRef}
        value={values.email}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
};

export default App;
