import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './component/homepage';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container bg = "dark">
      <Homepage />
    </Container>
   
  );
}

export default App;
