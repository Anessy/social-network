const ADD_MY_NEW_POST = 'ADD-MY-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        dialogsPage : {
            dialogsData : [
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
            newMessageText : 'Введите ваше сообщение...'
        },
        profilePage : {
            postsData: [
                {id: 1, count: 6, post: 'Hello everybody!'},
                {id: 2, count: 7, post: 'It is my first message :) '}
            ],
            newPostText: 'Ваш новый пост...',
        },
        pageOfNav : {
            listOfFriends : [
                {id: 1, name: 'Kira', photo: 'https://s40.radikal.ru/i087/0905/46/5c5cb069c125.jpg'},
                {id: 2, name: 'Masha', photo: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg'},
                {id: 3, name: 'Dasha', photo: 'https://avatarko.ru/img/kartinka/10/glaza_9177.jpg'},
                {id: 4, name: 'Nata', photo: 'https://www.mirprognozov.ru/uploads/images/old/1453187694-1381309907.jpg'},
                {id: 5, name: 'Pasha', photo: 'https://storage.fabulae.ru/images/books/book_538.jpg'}

            ]
        }
    },
    _callSubscriber: function () {
        console.log('state changed')
    },

    getState: function () {
        return this._state;
    },
    subscribe: function (observer) {
        this._callSubscriber = observer;
    },


    dispatch (action) {
        if (action.type === ADD_MY_NEW_POST) {
            let myNewPost = {
                id: 5,
                count: 0,
                post: this._state.profilePage.newPostText
            }
            if (this._state.profilePage.newPostText != '' && this._state.profilePage.newPostText != 'Ваш новый пост...') {
                this._state.profilePage.postsData.push(myNewPost);
                this._state.profilePage.newPostText = 'Ваш новый пост...';
            } else {
                this._state.profilePage.newPostText = 'Ваш новый пост...';
            }
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state); // перерисовали DOM
        }
        else if (action.type === 'ADD-NEW-MESSAGE') {
            let newFriendsMessage = {
                id : 5,
                message : this._state.dialogsPage.newMessageText
            }
            if (this._state.dialogsPage.newMessageText != '' && this._state.dialogsPage.newMessageText != 'Введите ваше сообщение...') {
                this._state.dialogsPage.messagesData.push(newFriendsMessage);
                this._state.dialogsPage.newMessageText = 'Введите ваше сообщение...';
            } else (
                this._state.dialogsPage.newMessageText = 'Введите ваше сообщение...'
            )
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};

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

export default store;
window.store = store;