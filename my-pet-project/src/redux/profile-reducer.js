import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'social-network/profile/ADD_POST';
const DELETE_POST = 'social-network/profile/DELETE_POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'social-network/profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likes: 10},
        {id: 2, message: 'My first post', likes: 30},
        {id: 3, message: 'What are you doing now?', likes: 20},
        {id: 4, message: 'Hi again', likes: 100}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likes: 2
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }

        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}


        case SET_USER_PROFILE:
            return {...state, profile: action.profile};


        case SET_USER_STATUS:
            return {...state, status: action.status};


        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}};

        default:
            return state;
    }
}

export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)

    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)

    dispatch(setUserStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer;