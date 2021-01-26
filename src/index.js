import store from './redux/redux-store'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreContext from "./StoreContext"

import './index.css';

let renderEntityTree = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
} 

renderEntityTree()

store.subscribe(renderEntityTree)