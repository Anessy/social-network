import React from 'react';
import Dialogs from './Dialogs';
import {addNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            { (store) => {

                let sendMessage = () => {
                    props.store.dispatch(addNewMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    props.store.dispatch(updateNewMessageTextActionCreator(text))
                }
                return (
                <Dialogs addNewMessage={sendMessage}
                         updateNewMessageText={onMessageChange}
                         dialogsData={store.getState().dialogsPage.dialogsData}
                         messagesData={store.getState().dialogsPage.messagesData}
                         dialogsPage={store.getState().dialogsPage}/> )
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;