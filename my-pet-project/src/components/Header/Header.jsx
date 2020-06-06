import React from 'react';
import s from './../Header/Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={s.header}>
            <img src="https://samanvi.in/wp-content/uploads/2018/05/l1.jpg" alt=""/>

            <div className={s.login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}

export default Header;