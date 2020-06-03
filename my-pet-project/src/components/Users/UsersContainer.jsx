import {connect} from "react-redux";
import Users from "./Users";
import {setCurrentPageAC, setUsersAC, setUsersCountAC, subAC, unsubAC} from "../../redux/users-reducer";

export const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
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
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);