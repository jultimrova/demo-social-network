const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_SUBSCRIBE_IN_PROGRESS = 'TOGGLE_IS_SUBSCRIBE_IN_PROGRESS';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    subscribeInProgress: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, subscribe: true}
                    }
                    return u;
                })
            }
        case UNSUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, subscribe: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_SUBSCRIBE_IN_PROGRESS: {
            return {
                ...state,
                subscribeInProgress: action.isFetching
                    ? [...state.subscribeInProgress, action.userId]
                    : state.subscribeInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}

export const subscribe = (userId) => ({type: SUBSCRIBE, userId});
export const unsubscribe = (userId) => ({type: UNSUBSCRIBE, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleSubscribeInProgress = (isFetching, userId) => ({type: TOGGLE_IS_SUBSCRIBE_IN_PROGRESS, isFetching, userId});


export default usersReducer;