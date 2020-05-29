import {rerenderEntireTree} from "../../render";

let state = {
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
        ]
    },

    sidebar: {
        friends: [
            {name: 'NiKo'},
            {name: 'Dasha'},
            {name: 'Julia'},
            {name: 'Mark'}
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 2
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = newText => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;