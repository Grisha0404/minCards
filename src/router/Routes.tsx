import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Appliances} from "../appliances/Appliances";
import {CrewsPage} from "../crews/CrewsPage";
import {SchedulePage} from "../schedule/SchedulePage";
import {Login} from "../loggined/Login";

export const PATH = {
    HOME: '/profile',
    APPLIANCES: '/appliances',
    CREWS: '/crews',
    SCHEDULE: '/schedule',
    LOGIN: '/login',
    // add paths
}
export const Routers = () => {
    return (
        <div>
                <Routes>
                    <Route path={PATH.APPLIANCES} element={<Appliances/>}/>
                    <Route path={PATH.CREWS} element={<CrewsPage/>}/>
                    <Route path={PATH.SCHEDULE} element={<SchedulePage/>}/>
                    <Route path={PATH.LOGIN} element={<Login/>}/>
                </Routes>
        </div>
    );
};
