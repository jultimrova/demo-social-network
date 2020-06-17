import React from 'react';
import s from './Users.module.css'
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div className={s.usersContainer}>
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged}
                        totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            <div>
                {
                    users.map(user => <User key={user.id}
                                            user={user}
                                            followInProgress={props.followInProgress}
                                            unfollow={props.unfollow}
                                            follow={props.follow}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Users;