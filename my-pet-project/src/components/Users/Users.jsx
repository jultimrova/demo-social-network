import React from 'react';
import s from './Users.module.css';
import users from './../../assets/images/users.jpg'

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
                                 onClick={() => {props.onPageChanged(page)}}>{page}</span>
                })}

            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.usersPhoto} src={u.photos.small != null ? u.photos.small : users}
                             alt='userPhoto'/>
                    </div>
                    <div>
                        {u.subscribe
                            ? <button onClick={() => {
                                props.unsubscribe(u.id)
                            }}>UnSubscribe</button>
                            : <button onClick={() => {
                                props.subscribe(u.id)
                            }}>Subscribe</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{u.id}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;