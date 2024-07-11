import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './layout/Header';
import Main from './layout/Main';


function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Main/>
      </Container>
    </>
  );
}

export default App;
