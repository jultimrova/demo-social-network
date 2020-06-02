import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, subAC, unsubAC} from "../../redux/users-reducer";

export const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);