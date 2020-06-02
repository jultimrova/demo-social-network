const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, subscribe: true}
                    }
                    return u;
                })
            }
        case UNSUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, subscribe: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}


        default:
            return state;
    }
}

export const subAC = (userID) => ({type: SUBSCRIBE, userID});
export const unsubAC = (userID) => ({type: UNSUBSCRIBE, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;