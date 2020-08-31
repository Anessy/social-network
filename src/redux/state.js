let entireThree = () => { };

let state = {
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
        newPostText: 'Ваш новый пост...'
    },
    pageOfNav : {
        listOfFriends : [
            {id: 1, name: 'Kira', photo: 'https://s40.radikal.ru/i087/0905/46/5c5cb069c125.jpg'},
            {id: 2, name: 'Masha', photo: 'https://introcs.cs.princeton.edu/java/stdlib/mandrill200x200.jpg'},
            {id: 3, name: 'Dasha', photo: 'https://avatarko.ru/img/kartinka/10/glaza_9177.jpg'},
            {id: 4, name: 'Nata', photo: 'https://www.mirprognozov.ru/uploads/images/old/1453187694-1381309907.jpg'},
            {id: 5, name: 'Pasha', photo: 'https://storage.fabulae.ru/images/books/book_538.jpg'}

        ]
    }
}

export let addMyNewPost = () => {
    let myNewPost = {
        id: 5,
        count: 0,
        post: state.profilePage.newPostText
    }
    if (state.profilePage.newPostText != '' && state.profilePage.newPostText != 'Ваш новый пост...') {
        state.profilePage.postsData.push(myNewPost);
        state.profilePage.newPostText = 'Ваш новый пост...';
    } else {
        state.profilePage.newPostText = 'Ваш новый пост...';
    }
    entireThree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    entireThree(state); // перерисовали DOM

}

export let addNewMessage = () => {
    let newFriendsMessage = {
        id : 5,
        message : state.dialogsPage.newMessageText
    }
    if (state.dialogsPage.newMessageText != '' && state.dialogsPage.newMessageText != 'Введите ваше сообщение...') {
        state.dialogsPage.messagesData.push(newFriendsMessage);
        state.dialogsPage.newMessageText = 'Введите ваше сообщение...';
    } else (
        state.dialogsPage.newMessageText = 'Введите ваше сообщение...'
    )
    entireThree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    entireThree(state);
}

export let subscribe = (observer) => {
    entireThree = observer;
}

export default state;