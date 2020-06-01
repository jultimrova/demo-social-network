import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = state.messages
        .map(message => <Message message={message.message}/>);

    let newMessageElement = state.newMessageText;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (e) => {
        let newText =  e.target.value;
        props.store.dispatch(updateNewMessageTextCreator(newText));
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
                              value={newMessageElement}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
