import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {PATH} from "../../router/Routes";
import style from "../Profile.module.css";
import {Button} from "../../components/Button/Button";
import {useDispatch} from "react-redux";
import {setLoggedInAC} from "../../reducer/loginReducer";

export const Nav = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const clickLogOutHandler = () => {
        navigate('/')
        dispatch(setLoggedInAC(false))
    }
    return (
        <div className={style.navbar}>
            <div className={style.navContainer}>
                <Link to={PATH.APPLIANCES}>Приборы</Link>
                <Link to={PATH.CREWS}>Экипажи</Link>
                <Link to={PATH.SCHEDULE}>График Работы</Link>
            </div>
            <Button onClick={clickLogOutHandler}>Выход</Button>
        </div>
    );
};

