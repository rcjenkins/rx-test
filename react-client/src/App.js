import React from 'react';
import Router from './router';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reed Exhibitions Test</h1>
      </header>
      <Container>
        <main>
          <Router />
        </main>
      </Container>
      <footer>&copy; Copyright</footer>
    </div>
  );
}

export default App;
