import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    debugger
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;