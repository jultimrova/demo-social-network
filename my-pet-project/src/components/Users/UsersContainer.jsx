import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPageAC,
    setUsersAC,
    setUsersCountAC,
    subAC,
    toggleIsFetchingAC,
    unsubAC
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = pageNumber => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   subscribe={this.props.subscribe}
                   unsubscribe={this.props.unsubscribe}
                   onPageChanged={this.onPageChanged}
            />
        </>
    }
}

export const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (userID) => {
            dispatch(subAC(userID))
        },
        unsubscribe: (userID) => {
            dispatch(unsubAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersCount: (totalCount) => {
            dispatch(setUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);