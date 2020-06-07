import React from 'react';
import {connect} from 'react-redux';
import {
    subscribe,
    unsubscribe,
    setUsers,
    setCurrentPage,
    setUsersCount,
    toggleIsFetching,
    toggleSubscribeInProgress
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersCount(data.totalCount);
        });
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
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
                   toggleSubscribeInProgress={this.props.toggleSubscribeInProgress}
                   subscribeInProgress={this.props.subscribeInProgress}
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
        subscribeInProgress: state.usersPage.subscribeInProgress,
    }
}


export default connect(mapStateToProps, {
    subscribe, unsubscribe,
    setUsers, setCurrentPage,
    setUsersCount, toggleIsFetching,
    toggleSubscribeInProgress
})(UsersContainer);