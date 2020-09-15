import React from 'react';
import MyPosts from './MyPosts';
import {addMyNewPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'



const MyPostsContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addMyNewPostActionCreator());
    }
debugger
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
       <MyPosts updateNewPostText={onPostChange}
                addMyNewPost={addPost}
                posts={props.state.profilePage.postsData}
                newPostText={props.state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;