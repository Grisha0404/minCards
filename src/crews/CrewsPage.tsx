import React from 'react';
import style from './Crews.module.css'
import '../App.css'
import {Gaz} from "./gaz/Gaz";

export const CrewsPage = () => {

    return (
        <div className='content'>
            <div className={style.appliances}>
                <h1>Экипажи</h1>
                <Gaz name={'GAZ-1'}/>
                <Gaz name={'GAZ-2'}/>
                <Gaz name={'GAZ-3'}/>
                <Gaz name={'GAZ-4'}/>
            </div>
        </div>
    );
};
