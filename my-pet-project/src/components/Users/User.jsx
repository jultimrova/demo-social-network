import React from 'react';
import s from './Users.module.css'
import usersPhoto from '../../assets/images/usersPhoto.jpg'
import {NavLink} from 'react-router-dom';

const User = ({user, followInProgress, unfollow, follow}) => {
    return (
            <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img className={s.usersPhoto}
                             src={user.photos.small != null ? user.photos.small : usersPhoto}
                             alt='usersPhoto'/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {unfollow(user.id)}}>
                                Unsubscribe</button>
                            : <button disabled={followInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {follow(user.id)}}>
                                Subscribe</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>{user.id}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
            </div>
    )
}

export default User;