import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie' ;
import { ThemeProvider } from 'styled-components' ;
import { Provider } from 'react-redux' ;

import theme from './Util/theme' ;
import store from './Store/store' ;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CookiesProvider>
          <App />
      </CookiesProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

