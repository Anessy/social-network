import React from 'react';
import Dialogs from './Dialogs';
import {addNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';


const DialogsContainer = (props) => {

    let sendMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs addNewMessage={sendMessage}
                 updateNewMessageText={onMessageChange}
                 dialogsData={props.state.dialogsPage.dialogsData}
                 messagesData={props.state.dialogsPage.messagesData}
                 dialogsPage={props.state.dialogsPage}/>
    )
}

export default DialogsContainer;