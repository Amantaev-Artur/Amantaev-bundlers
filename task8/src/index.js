import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ReactComponent as JsImage } from './images/javascript.svg';

ReactDOM.render(
  <><App /><JsImage /></>,
  document.querySelector('#root')
);
