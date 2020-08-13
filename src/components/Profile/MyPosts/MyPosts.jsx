import React, { component } from 'react';
import  Post from './Post/Post'
import classes from './MyPosts.module.css';


const MyPosts = () => {
return (
<div>

  <div className={classes.content}>
    my posts

  <div>
    New posts
  </div>
    <Post message='It is my second post' count='6'/>
    <Post message='It is my first post' count='7'/>
</div>
</div>
)
}

export default MyPosts;