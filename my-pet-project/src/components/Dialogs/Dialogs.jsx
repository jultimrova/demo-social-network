import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>);

    let messageElements = state.messages
        .map(message => <Message key={message.id} message={message.message}/>);

    let newMessageText = state.newMessageText;


    let osSendMessage = () => {
        props.onSendMessage();
    }

    let onMessageChange = (e) => {
        let newText =  e.target.value;
        props.onMessageChange(newText);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

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
