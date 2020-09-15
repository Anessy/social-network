const ADD_MY_NEW_POST = 'ADD-MY-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, count: 6, post: 'Hello everybody!'},
        {id: 2, count: 7, post: 'It is my first message :) '}
    ],
    newPostText: 'Ваш новый пост...'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MY_NEW_POST :
            let myNewPost = {
                id: 5,
                count: 0,
                post: state.newPostText
            }
            if (state.newPostText != '' && state.newPostText != 'Ваш новый пост...') {
                state.postsData.push(myNewPost);
                state.newPostText = 'Ваш новый пост...';
            } else {
                state.newPostText = 'Ваш новый пост...';
            }
            return state;

        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText;
            return state;

        default :
            return state;
    }
}

export const addMyNewPostActionCreator = () => {
    return (
        {type: ADD_MY_NEW_POST}
    )
}
export const updateNewPostTextActionCreator = (text) => {
    return (
        {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
}

export default profileReducer;