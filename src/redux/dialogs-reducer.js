const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Lara'},
        {id: 4, name: 'Kostia'},
        {id: 5, name: 'Kira'}
    ],
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'It is my message'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'}
    ],
    newMessageText: 'Введите ваше сообщение...'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE :
            let newFriendsMessage = {
                id: 5,
                message: state.newMessageText
            }
            if (state.newMessageText != '' && state.newMessageText != 'Введите ваше сообщение...') {
                state.messagesData.push(newFriendsMessage);
                state.newMessageText = 'Введите ваше сообщение...';
            } else (
                state.newMessageText = 'Введите ваше сообщение...'
            )
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addNewMessageActionCreator = () => {
    return (
        {type: ADD_NEW_MESSAGE}
    )
}
export const updateNewMessageTextActionCreator = (text) => {
    return (
        {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
    )
}

export default dialogsReducer;