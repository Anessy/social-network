import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';


let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postsData: [
                {id: 1, count: 6, post: 'Hello everybody!'},
                {id: 2, count: 7, post: 'It is my first message :) '}
            ],
            newPostText: 'Ваш новый пост...',
        },
        pageOfNav: {
            listOfFriends: [
                {id: 1, name: 'Kira', photo: 'https://s40.radikal.ru/i087/0905/46/5c5cb069c125.jpg'},
                {id: 2, name: 'Masha', photo: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg'},
                {id: 3, name: 'Dasha', photo: 'https://avatarko.ru/img/kartinka/10/glaza_9177.jpg'},
                {
                    id: 4,
                    name: 'Nata',
                    photo: 'https://www.mirprognozov.ru/uploads/images/old/1453187694-1381309907.jpg'
                },
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


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    }
};



export default store;
window.store = store;