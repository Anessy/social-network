import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={classes.portfolio}>
            <div className={classes.image}>
                <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"></img>
            </div>
            <div className={classes.description}>
                <h3>Обо мне</h3>
                <p><span>Коротко обо мне:</span> Живу в Киеве. Более года работала верстальщиком сайтов на фриланс-бирже (html, css, bootstrap). Потом еще год - front end разработчиков в "HS Ukraine" (html, css, js). Сейчас занимаюсь разработкой сайтов с помощью react. Влюблена в свою работу &#9829; </p>
            </div>
        </div>
    )
}

export default ProfileInfo;