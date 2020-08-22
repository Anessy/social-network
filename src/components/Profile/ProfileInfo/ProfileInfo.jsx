import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={classes.text}>
            <div>
                <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"></img>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;