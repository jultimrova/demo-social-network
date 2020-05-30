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

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 2
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    updateNewMessageText (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    }
}

export default store;

window.state = store;