import React from 'react';
import style from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {Nav} from "./navBar/NavLink";
import '../App.css'

export const Profile = () => {

    return (
        <div className='profile'>
            <div className={style.profile}>
                <div className={style.wrapper}>
                    <div className={style.paper}>
                        <ProfileInfo/>
                        <Nav/>
                    </div>
                </div>
            </div>
        </div>
    );
};
