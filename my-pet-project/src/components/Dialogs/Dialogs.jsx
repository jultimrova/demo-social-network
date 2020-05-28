import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    const path = '/dialogs/' + id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} activeClassName={s.active}>{name}</NavLink>
        </div>
    )
}

const Message = ({message}) => {
    return <div className={s.message}>{message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogItem id='1' name='NiKo'/>
                <DialogItem id='2' name='Dasha'/>
                <DialogItem id='3' name='Julia'/>
                <DialogItem id='4' name='Mark'/>
            </div>

            <div className={s.messages}>
                <Message message='Hi.'/>
                <Message message='Hi, how are you?'/>
                <Message message='What is your status?'/>
            </div>
        </div>
    )
}

export default Dialogs;
