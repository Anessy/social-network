import React, {component} from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css';



const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post message={post.post} count={post.count}/>)
    return (
        <div>

            <div className={classes.content}>

                <div className={classes.smallAva}>
                    <img src={require('../../../img/ava.jpg')}/>
                </div>
                <div className={classes.newPost}>
                    <p>Новый пост:</p>
                    <textarea></textarea>
                </div>


                <postsElement />
            </div>

            <div className={classes.buttonPost}>
                <div></div>
                <div>
                    <button>Post me!</button>
                </div>
            </div>
            <div className={classes.oldPosts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;