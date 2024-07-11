import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './layout/Header';
import Main from './layout/Main';
import './App.css';


function App() {

  return (
    <>
      <CssBaseline />
      <Container className="AppContainer">
      <Header />
      <Main/>
      </Container>
    </>
  );
}

export default App;
