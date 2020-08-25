import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={classes.content}>
                <div>
                    <img src={require('../../../../img/ava.jpg')}/>
                    <span>{props.message}</span>
                </div>
                <div className={classes.forLikes}>
                    <div>Like {props.count}</div>
                </div>
            </div>
        </div>
    )
}

export default Post;