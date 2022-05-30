import React from 'react';
import './App.css';
import {Login} from "./loggined/Login";
import {useSelector} from "react-redux";
import {AppStoreType} from "./redux/store";
import {Profile} from "./profile/Profile";
import {Routers} from "./router/Routes";

function App() {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)

    return (
        <div className="app">
            {isLoggedIn ? <Profile/> : <Login/>}
            <Routers/>
        </div>
    );
}

export default App;
