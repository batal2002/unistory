import React from 'react';
import Registration from "../Registration/Registration";
import s from './Main.module.css'
import Table from "../Table/Table";
import {useAppSelector} from "../../hooks/redux";
const Main = () => {
    const {username} = useAppSelector(state => state.userReducer)
    return (
        <div className={'container ' + s.main}>
            <Registration/>
            {username && <Table/>}
        </div>
    );
};

export default Main;