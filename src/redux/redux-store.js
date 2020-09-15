import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer'

let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    pageOfNav : navbarReducer
})

let store = createStore(reducers);

export default store;

