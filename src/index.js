import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { BrowserRouter } from 'react-router-dom';

// React Redux
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import ScrollToTop from './components/ScrollToTop';

import './index.scss';
import App from './App';


// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  /*<React.StrictMode>*/
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  /*</React.StrictMode>*/,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
