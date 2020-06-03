import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios'
import users from './../../assets/images/users.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <div className={s.usersContainer}>
            {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.usersPhoto} src={u.photos.small != null ? u.phatos.small : users}
                             alt='userPhoto'/>
                    </div>
                    <div>
                        {u.subscribe
                            ? <button onClick={() => {
                                this.props.unsubscribe(u.id)
                            }}>UnSubscribe</button>
                            : <button onClick={() => {
                                this.props.subscribe(u.id)
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

    }
}

export default Users;