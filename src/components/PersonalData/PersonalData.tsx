import React, {FC} from 'react';
import s from './PersonalData.module.css'
import {IUser} from "../../models/IUser";

interface Props {
    data: IUser;
}

const PersonalData: FC<Props> = ({data}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.data}>
                <h1 className={s.mainTitle}>PERSONAL DATA</h1>
                <h3 className={s.title}>name</h3>
                <p className={s.body}>{data.username}</p>
                <h3 className={s.title}>Email</h3>
                <p className={s.body}>{data.email}</p>
                <h3 className={s.title}>wallet</h3>
                <p className={s.body}>{data.address}</p>
            </div>
        </div>
    );
};

export default PersonalData;