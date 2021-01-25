import my_store from './redux/state'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderEntityTree = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={my_store.getState()} dispatch={my_store.dispatch.bind(my_store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
} 

renderEntityTree()

my_store.subscribe(renderEntityTree)