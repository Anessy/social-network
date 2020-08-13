import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={classes.content}>
                <img
                    src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"></img>
                <span>{props.message}</span>
                <div>Like {props.count}</div>
            </div>
        </div>
    )
}

export default Post;