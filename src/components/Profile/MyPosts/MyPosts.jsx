import React, {component} from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css';

let postsData = [
{id: 1, count: 6, post: 'Hello everybody'},
{id: 2, count: 7, post: 'It is my message'}
]

let postsElement = postsData.map(post => <Post message={post.post} count={post.count}/>)
const MyPosts = () => {
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