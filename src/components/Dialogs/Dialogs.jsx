import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.dialogsPage.messagesData.map(mes => <Message message={mes.message}/>)

    let newMessage = React.createRef();
    let sendMessage = () => {
            props.addNewMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={classes.messages}>
                    {messagesElement}
                </div>

            </div>

            <div className={classes.forNewMessage}>
                <div className={classes.newMessage}>
                    <textarea ref={newMessage}
                              onChange={onMessageChange}
                              value={props.dialogsPage.newMessageText}/>
                    <div className={classes.buttonSend}>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;