import React from "react";
import s from './../Sidebar/Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a href='#'>Users</a>
            </div>
            <div className={s.item}>
                <a href='#'>News</a>
            </div>
            <div className={s.item}>
                <a href='#'>Music</a>
            </div>
            <div className={s.item}>
                <a href='#'>Settings</a>
            </div>
        </div>
    )
}
export default Sidebar;