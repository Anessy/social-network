import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {id: 1, name: 'Misha'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Lara'},
    {id: 4, name: 'Kostia'},
    {id: 5, name: 'Kira'}
]

let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'It is my message'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
]

let postsData = [
    {id: 1, count: 6, post: 'Hello everybody'},
    {id: 2, count: 7, post: 'It is my message'}
]

ReactDOM.render(
  <React.StrictMode>
    <App messagesData = {messagesData} dialogsData = {dialogsData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
