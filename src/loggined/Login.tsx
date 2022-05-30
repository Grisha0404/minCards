import React, {useState} from 'react';
import {Button} from "../components/Button/Button";
import {InputText} from "../components/InputText/InputText";
import './Login.css'
import {useDispatch} from "react-redux";
import {setLoggedInAC} from "../reducer/loginReducer";
import {cardsEmployee} from "../cards/cardsEmployee";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const initialState: { firstName: string, password: string } = {
        firstName: '',
        password: '',
    }
    const [state, setState] = useState<{ firstName: string, password: string }>(initialState)
    const [error, setError] = useState<string>('')
    const navigate = useNavigate()

    const cards = cardsEmployee.find(t => t.firstName === state.firstName && t.password === state.password)
    const dispatch = useDispatch()

    const changeNameHandler = (value: string) => {
        let str = value[0].toUpperCase() + value.slice(1);
        setError('')
        setState({...state, firstName: str})
    }
    const changePasswordHandler = (value: string) => {
        setError('')
        setState({...state, password: value})
    }

    const clickHandler = () => {
        if (cards) {
            navigate('/profile')
            dispatch(setLoggedInAC(true))
        } else {
            setError('Сотрудник не найден, проверьте правильность внесения данных!')
        }
    }
    return (
        <div className='login'>
            <div className="wrapper">
                <div className="paper">
                    <div>
                        <h2>Добро пожаловать!</h2>
                        <h2>САВР</h2>
                    </div>
                    <div>
                        <InputText name={'Email'} placeholder={'ФИО'} onChangeText={changeNameHandler}/>
                        <InputText name={'Password'} placeholder={'Пароль'} onChangeText={changePasswordHandler}/>
                    </div>
                    <span>{error}</span>
                    <div>
                        <Button onClick={clickHandler}>Войти</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
