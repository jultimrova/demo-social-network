import React from "react";
import s from './../Dialogs.module.css'

const Message = ({message}) => {
    return (
        <div className={s.message}>
            <li>{message}</li>
        </div>
    )
}

export default Message;
