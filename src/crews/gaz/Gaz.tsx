import React, {useState} from 'react';
import {TableGaz} from "../table/TableGaz";

type GazType = {
    name: string,
}

export const Gaz: React.FC<GazType> = ({name}) => {
    const [state, setState] = useState<boolean>(true)

    const clickHandler = () => {
        setState(!state)
    }
    return (
        <div>
            {state ? <div onClick={clickHandler}><h3>{name}</h3></div>
                : <div>
                    <div onClick={clickHandler}><h3>{name}</h3></div>
                    <TableGaz/>
                </div>}
        </div>
    );
};
