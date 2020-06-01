import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (newText) => {
        props.store.dispatch(updateNewMessageTextCreator(newText));
    }

    return (<Dialogs dialogsPage={state}
                     onSendMessage={onSendMessage}
                     onMessageChange={onMessageChange}
    />)
}

export default DialogsContainer;
