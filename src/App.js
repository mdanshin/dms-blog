import React from 'react';
import Menu from './components/Menu/Menu'
import Container from 'react-bootstrap/Container'
import Main from './components/Main/Main'


function App() {
  return (
    <Container>
      <Menu />
      <Main sidebar="right" />
    </Container>
    // <Footer>
  );
}

export default App;
