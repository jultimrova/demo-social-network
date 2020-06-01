const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.messages.push({id: 5, message: newMessage});
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            break;
    }

    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;