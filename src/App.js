import React from 'react';
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (

    <Router>
        <Nav />
        <Main />
    </Router>
        
  );
}

export default App;
