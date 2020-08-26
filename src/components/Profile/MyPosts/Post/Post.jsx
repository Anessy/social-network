import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={classes.content}>
                <div className={classes.wrapper}>
                    <div>
                        <img src={require('../../../../img/ava.jpg')}/>
                    </div>
                    <div className={classes.oldPost}>
                        {props.message}
                    </div>
                </div>
                <div className={classes.forLikes}>
                    <div>♥ {props.count}</div>
                </div>
            </div>
        </div>
    )
}

export default Post;