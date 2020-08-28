import {entireThree} from '../render';

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
        ]
    },
    profilePage : {
        postsData: [
            {id: 1, count: 6, post: 'Hello everybody!'},
            {id: 2, count: 7, post: 'It is my first message :) '}
        ]
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

export let addMyNewPost = (postMessage) => {
    let myNewPost = {
        id: 5,
        count: 0,
        post: `${postMessage}`
    }
    state.profilePage.postsData.push(myNewPost);
    entireThree(state);
}

export let addNewMessage = (friendsMessage) => {
    let newFriendsMessage = {
        id : 5,
        message : `${friendsMessage}`
    }
    state.dialogsPage.messagesData.push(newFriendsMessage);
    entireThree(state);
}



export default state;