import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.state.messagesData.map(mes => <Message message={mes.message}/>)

    let newMessage = React.createRef(); /* создали ссылку на элемент*/
    let sendMessage = () => { /* ф-ция срабатывающая при клике*/
        let wrMessage = newMessage.current.value; /* получили текст с поля ввода */
        if (wrMessage !== '') {
            props.addNewMessage(wrMessage);
            newMessage.current.value = '';
        }
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
                    <textarea ref={newMessage} placeholder={'Введите ваше сообщение...'}></textarea>
                    <div className={classes.buttonSend}>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;