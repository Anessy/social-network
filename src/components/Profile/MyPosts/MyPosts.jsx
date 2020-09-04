import React from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css';
import {addMyNewPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'



const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post message={post.post} count={post.count}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addMyNewPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div>
            <div className={classes.content}>
                <div className={classes.smallAva}>
                    <img src={require('../../../img/ava.jpg')}/>
                </div>
                <div className={classes.newPost}>
                    <p>Новый пост:</p>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <postsElement/>
            </div>
            <div className={classes.buttonPost}>
                <div></div>
                <div>
                    <button onClick={addPost}>Post me!</button>
                </div>
            </div>
            <div className={classes.oldPosts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;