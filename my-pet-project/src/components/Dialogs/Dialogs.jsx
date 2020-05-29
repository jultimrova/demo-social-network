import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogs, messages}) => {

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
