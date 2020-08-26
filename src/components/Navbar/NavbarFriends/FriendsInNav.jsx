import React from 'react';
import classes from './FriendsInNav.module.css';

const FriendsInNav = (props) => {
    return <img className={classes.friendsPhoto} src={props.photo}/>
}

export default FriendsInNav;