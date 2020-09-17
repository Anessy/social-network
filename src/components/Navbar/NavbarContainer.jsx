import React from 'react';
import Navbar from './Navbar';
import FriendsInNav from './NavbarFriends/FriendsInNav';
import StoreContent from '../../StoreContext';

const NavbarContainer = () => {
    return (
        <StoreContent.Consumer>
            { (store) => {

                let state = store.getState();
                let friendsElement = state.listOfFriends.map(friend => <FriendsInNav name={friend.name}
                                                                                                photo={friend.photo}/>);

                return (
                    <Navbar friendsElement={friendsElement}/> )
            }
            }
        </StoreContent.Consumer>
    )
}
console.log('store in NavbarContainer: ', store)
debugger

export default NavbarContainer;