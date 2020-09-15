import React from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css';


const MyPosts = (props) => {
debugger
    let postsElement = props.posts.map(post => <Post message={post.post} count={post.count}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addMyNewPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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