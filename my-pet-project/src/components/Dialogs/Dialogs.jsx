import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = props.dialogsPage.messages
        .map(message => <Message message={message.message}/>);


    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
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
                <textarea onChange={onMessageChange}
                          ref={newMessageElement}
                          value={props.newPostText}
                />
                <div>
                    <button onClick={addMessage}>Add message</button>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
