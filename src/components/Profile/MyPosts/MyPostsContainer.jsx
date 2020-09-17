import React from 'react';
import MyPosts from './MyPosts';
import {addMyNewPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import StoreContext from '../../../StoreContext';


const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            { (store) => {
                let addPost = () => {
                    props.store.dispatch(addMyNewPostActionCreator());
                }
                let onPostChange = (text) => {
                    props.store.dispatch(updateNewPostTextActionCreator(text))
                }
                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addMyNewPost={addPost}
                             posts={store.getState().profilePage.postsData}
                             newPostText={store.getState().profilePage.newPostText}/>)
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;