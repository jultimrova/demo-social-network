import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>NiKo</div>
                <div className={s.dialog}>Dasha</div>
                <div className={s.dialog}>Julia</div>
                <div className={s.dialog}>Mark</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi.</div>
                <div className={s.message}>Hi, how are you?</div>
                <div className={s.message}>What is your status?</div>
            </div>
        </div>
    )
}

export default Dialogs;
