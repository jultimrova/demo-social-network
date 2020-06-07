import React from 'react';
import s from './Users.module.css';
import usersPhoto from '../../assets/images/usersPhoto.jpg'
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.usersContainer}>
            <div className={s.paginator}>
                {pages.map(page => {
                    return <span className={props.currentPage === page && s.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(page)
                                 }}>{page}</span>
                })}

            </div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img className={s.usersPhoto} src={user.photos.small != null ? user.photos.small : usersPhoto}
                             alt='userPhoto'/>
                        </NavLink>
                    </div>
                    <div>
                        {user.subscribe
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '2f622bb4-7235-4fc9-b85b-75b00ff9e5b9'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unsubscribe(user.id);
                                        }
                                    });

                            }}>Unsubscribe</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '2f622bb4-7235-4fc9-b85b-75b00ff9e5b9'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.subscribe(user.id);
                                        }
                                    });

                            }}>Subscribe</button>
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
            </div>)}
        </div>
    )
}

export default Users;