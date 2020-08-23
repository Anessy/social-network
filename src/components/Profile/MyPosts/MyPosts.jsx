import React, {component} from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css';



const MyPosts = (props) => {
    let postsElement = props.postsData.map(post => <Post message={post.post} count={post.count}/>)
    return (
        <div>

            <div className={classes.content}>
                my posts

                <div>
                    New posts
                </div>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;