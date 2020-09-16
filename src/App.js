import React from 'react';
import './App.css';

import theme from './theme';

import { ThemeProvider } from '@material-ui/core/styles';

import Cards from './components/Cards';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Cards />
    </ThemeProvider>
  );
}

export default App;
