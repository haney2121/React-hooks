import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { About, Home } from './pages';

import './App.css';

import { UserContext } from './context/UserContext';

const App = () => {
  const [value, setValue] = useState();

  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  console.log(value);

  return (
    <Router>
      <div className='App-header'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {value && (
              <li>
                <Link to='/about'>About</Link>
              </li>
            )}
          </ul>
          <UserContext.Provider value={providerValue}>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
          </UserContext.Provider>
        </nav>
      </div>
    </Router>
  );
};

export default App;
