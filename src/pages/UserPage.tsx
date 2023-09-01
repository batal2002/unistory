import React from 'react';
import {useParams} from "react-router-dom";
import {userAPI} from "../services/UserService";
import PersonalData from "../components/PersonalData/PersonalData";
import Preloader from "../UI/Preloader/Preloader";
import s from '../components/PersonalData/PersonalData.module.css'
import Planet from "../components/Planet/Planet";

const UserPage = () => {

    const {id} = useParams<string>()
    const {data, isFetching, error} = userAPI.useFetchUserQuery(id)
    console.log(error)
    return (
        <div className={'container ' + s.userPageContainer}>
            {isFetching && <Preloader/>}

            {error && <h3 className={s.error}>User not found</h3>}
            {data && <PersonalData data={data}/>}
            <Planet/>
        </div>
    );
};

export default UserPage;