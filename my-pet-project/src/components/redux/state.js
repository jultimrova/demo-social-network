let state = {
    profilePage: {
        posts: [
            {id: 1, likes: 10, message: 'Hi'},
            {id: 2, likes: 30, message: 'My first post'},
            {id: 3, likes: 20, message: 'What are you doing now?'},
            {id: 4, likes: 100, message: 'Hi again'}
        ]
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

export default state;