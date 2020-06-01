import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = state.messages
        .map(message => <Message message={message.message}/>);

    let newMessageText = state.newMessageText;


    let osSendMessage = () => {
        props.onSendMessage();
    }

    let onMessageChange = (e) => {
        let newText =  e.target.value;
        props.onMessageChange(newText);
    }

    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogsItem}>
                <div>
                    {dialogsElements}
                </div>
            </div>

            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea onChange={onMessageChange}
                              placeholder='Enter message'
                              value={newMessageText}/>
                </div>
                <div>
                    <button onClick={osSendMessage}>Send message</button>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
