import React from 'react';
import style from './ProfileInfo.module.css'
import {cardsEmployee} from "../../cards/cardsEmployee";
import {CardsInfo} from "./CardsInfo";

export const ProfileInfo = () => {

    return (
        <div>
            {cardsEmployee.map((t, i) => <div key={i} className={style.profileInfo}>
                   <CardsInfo smena={t.smena} logo={t.logo} firstName={t.firstName} secondName={t.secondName} jobTitle={t.jobTitle}/>
                </div>
            )}
        </div>
    );
};
