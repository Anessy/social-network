import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

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

let dialogsElement = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

let messagesElement = messagesData.map(mes => <Message message={mes.message}/>)

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;