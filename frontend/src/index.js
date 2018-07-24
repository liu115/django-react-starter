import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducers';
import App from './components/App';

const store = createStore(rootReducers);
// const Bpp = () => (
//     <div><p>Hello world</p></div>
// );

render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('app')
);

