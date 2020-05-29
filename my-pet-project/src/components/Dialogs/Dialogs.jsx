import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'NiKo'},
        {id: 2, name: 'Dasha'},
        {id: 3, name: 'Julia'},
        {id: 4, name: 'Mark'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi, how are you?'},
        {id: 3, message: 'What is your status?'},
        {id: 4, message: 'Hey'}
    ]

    let dialogsElements = dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = messages
        .map(message => <Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;
