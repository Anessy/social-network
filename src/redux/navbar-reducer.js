let initialState = {
    listOfFriends: [
        {id: 1, name: 'Kira', photo: 'https://s40.radikal.ru/i087/0905/46/5c5cb069c125.jpg'},
        {id: 2, name: 'Masha', photo: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg'},
        {id: 3, name: 'Dasha', photo: 'https://avatarko.ru/img/kartinka/10/glaza_9177.jpg'},
        {id: 4, name: 'Nata', photo: 'https://www.mirprognozov.ru/uploads/images/old/1453187694-1381309907.jpg'},
        {id: 5, name: 'Pasha', photo: 'https://storage.fabulae.ru/images/books/book_538.jpg'}
    ]
}

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;


