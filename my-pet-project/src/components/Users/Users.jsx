import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios'
import users from './../../assets/images/users.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={s.usersContainer}>
                <div className={s.paginator}>
                    {pages.map(page => {
                        return <span className={this.props.currentPage === page && s.selectedPage}
                        onClick={() => {this.onPageChanged(page)}}>{page}</span>
                    })}

                </div>
                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.usersPhoto} src={u.photos.small != null ? u.photos.small : users}
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
        )
    }
}

export default Users;