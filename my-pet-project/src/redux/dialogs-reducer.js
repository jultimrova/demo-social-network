const SEND_MESSAGE = 'SEND_MESSAGE';

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
    ]
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageText;
            return  {
                ...state,
                messages: [...state.messages, {id: 5, message: newMessage}]
            };

        default:
            return state;
    }


}

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;