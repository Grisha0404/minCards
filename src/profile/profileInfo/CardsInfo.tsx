import React from 'react';
import style from "./ProfileInfo.module.css";

type CardsType = {
    smena: number,
    logo: string,
    firstName: string,
    secondName: string,
    jobTitle: string,
}
export const CardsInfo = (props: CardsType) => {
    return (
        <div>
            <div className={style.profileInfo}>
                <h4>{props.smena} смена</h4>
                <div className={style.img} style={{backgroundImage: `url(${props.logo})`}}/>
                <div className={style.infoText}>
                    <h3>{props.firstName} {props.secondName}</h3>
                    <p>{props.jobTitle}</p>
                </div>
            </div>
        </div>
    );
};
