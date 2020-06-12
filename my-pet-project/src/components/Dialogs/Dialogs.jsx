import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>);

    let messageElements = state.messages
        .map(message => <Message key={message.id} message={message.message}/>);

    const addMessage = (values) => {
        props.onSendMessage(values.newMessageText);
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
                <AddMessageReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    )
}

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newMessageText'
                       placeholder='Enter Message'
                       validate={[requiredField, maxLength100]}
                />
            </div>
            <div>
                <button>Send</button>
                <button>Remove</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'addMessageForm'})(AddMessageForm);

export default Dialogs;
