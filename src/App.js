import React from 'react';
import Menu from './components/Menu/Menu'
import Container from 'react-bootstrap/Container'
import Main from './components/Main/Main'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Container>
        <Menu />
        <Main sidebar="right" />
      </Container>
    </Router>
        
  );
}

export default App;
