import React, { useContext } from 'react';

import { login } from '../utils/login';

import { UserContext } from '../context/UserContext';
const Home = () => {
  const { value, setValue } = useContext(UserContext);

  return (
    <div>
      <h1>Home</h1>
      {!value ? (
        <button
          onClick={async () => {
            const user = await login();
            setValue(user);
          }}>
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setValue(null);
          }}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
