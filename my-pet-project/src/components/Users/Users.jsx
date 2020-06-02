import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://i.pinimg.com/originals/c1/e8/b6/c1e8b6d72b7c16a3b1d4dd2006af9d7f.jpg',
                    subscribe: true,
                    fullName: 'Nikolai',
                    status: 'hey hey hey',
                    location: {city: 'Ucla', country: 'USA'}
                },
                {
                    id: 2,
                    photoUrl: 'https://i.pinimg.com/originals/c1/e8/b6/c1e8b6d72b7c16a3b1d4dd2006af9d7f.jpg',
                    subscribe: true,
                    fullName: 'Daria',
                    status: 'go go go',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://i.pinimg.com/originals/c1/e8/b6/c1e8b6d72b7c16a3b1d4dd2006af9d7f.jpg',
                    subscribe: true,
                    fullName: 'Julia',
                    status: 'me me me',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 4,
                    photoUrl: 'https://i.pinimg.com/originals/c1/e8/b6/c1e8b6d72b7c16a3b1d4dd2006af9d7f.jpg',
                    subscribe: false,
                    fullName: 'Mark',
                    status: 'la laa',
                    location: {city: 'Kharkiv', country: 'Ukraine'}
                },
            ]
        )
    }

    return (
        <div className={s.usersContainer}>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.usersPhoto} src={u.photoUrl} alt=''/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;