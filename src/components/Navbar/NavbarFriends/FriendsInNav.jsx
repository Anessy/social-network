import React from 'react';
import classes from './FriendsInNav.module.css';

const FriendsInNav = (props) => {

    return (
        <div className={classes.wrapper}>

            <div className={classes.friendsName}>{props.name}</div>
            <div className={classes.friendsPhoto}>
                <img src={props.photo}/>
            </div>
        </div>
    )
}

export default FriendsInNav;