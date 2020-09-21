import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

import './App.css';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';

import PostsContainer from './containers/PostsContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PostsContainer />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
