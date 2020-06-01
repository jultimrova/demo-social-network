import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likes: 10},
                {id: 2, message: 'My first post', likes: 30},
                {id: 3, message: 'What are you doing now?', likes: 20},
                {id: 4, message: 'Hi again', likes: 100}
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'NiKo'},
                {id: 2, name: 'Dasha'},
                {id: 3, name: 'Julia'},
                {id: 4, name: 'Mark'}
            ],

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi, how are you?'},
                {id: 3, message: 'What is your status?'},
                {id: 4, message: 'Hey'}
            ],
            newMessageText: ''
        },

        sidebar: {
            friends: [
                {name: 'NiKo'},
                {name: 'Dasha'},
                {name: 'Julia'},
                {name: 'Mark'}
            ]
        }
    },

    _callSubscriber() {
        console.log('state was changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;

window.state = store;