import React from "react";
import s from './../Sidebar/Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>

            <div className={s.friends}>
                <h2>Friends</h2>
                <span className={s.item}>
                    <NavLink to='/dialogs/1'>NiKo</NavLink>
                </span>
                <span className={s.item}>
                    <NavLink to='/dialogs/2'>Dasha</NavLink>
                </span>
                <span className={s.item}>
                    <NavLink to='/dialogs/3'>Julia</NavLink>
                </span>
                <span className={s.item}>
                    <NavLink to='/dialogs/4'>Mark</NavLink>
                </span>
            </div>
        </div>
    )
}
export default Sidebar;