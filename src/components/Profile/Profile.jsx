import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     addMyNewPost={props.addMyNewPost}
                     updateNewPostText = {props.updateNewPostText}/>
        </div>
    )
}

export default Profile;