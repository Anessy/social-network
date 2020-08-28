import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {addMyNewPost} from './redux/state';
import {addNewMessage} from './redux/state';



export let entireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addMyNewPost={addMyNewPost} addNewMessage={addNewMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

