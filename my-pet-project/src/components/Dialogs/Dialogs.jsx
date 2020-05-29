import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = props.state.messages
        .map(message => <Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div>
                    {dialogsElements}
                </div>
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;
