import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.pageOfNav}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={ () => <Profile store={props.store} state={props.state}/>}/>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer store={props.store} state={props.state}/>}/>
                    <Route path='/news'
                           render={ () => <News />}/>
                    <Route path='/music'
                           render={ () => <Music />}/>
                    <Route path='/settings'
                           render={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;