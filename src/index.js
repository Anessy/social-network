
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {addMyNewPost} from './redux/state';
import {addNewMessage} from './redux/state';
import {updateNewPostText} from './redux/state';
import {updateNewMessageText} from './redux/state';
import {subscribe} from './redux/state'



export let entireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addMyNewPost={addMyNewPost}
                 addNewMessage={addNewMessage}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

entireThree(state);
subscribe(entireThree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
