import React, {FC} from 'react';
import s from "./Table.module.css";
import {IUser} from "../../models/IUser";
import {useEthers} from "@usedapp/core";
import {useAppDispatch} from "../../hooks/redux";
import {deleteUser} from "../../store/reducers/UserSlice";
import {NavLink} from "react-router-dom";

const TableItem: FC<IUser> = ({username, email, address, id}) => {
    const {account} = useEthers()
    const dispatch = useAppDispatch()

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        account === address && e.preventDefault()
    }

    return (
        <NavLink to={`/user/${id}`} onClick={(e) => handleClick(e)}
                 className={account === address ? s.item + ' ' + s.orange : s.item}>
            <span className={s.column}>{username}</span>
            <span className={s.column}>{email}</span>
            <span className={s.column}>{address}</span>
            {account === address && <div onClick={() => dispatch(deleteUser())} className={s.delete}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                     fill="none">
                    <g clipPath="url(#clip0_46_976)">
                        <rect x="2.11035" y="2.81799" width="1" height="10" rx="0.5"
                              transform="rotate(-45 2.11035 2.81799)" fill="white"/>
                        <rect x="2.81738" y="9.88904" width="1" height="10" rx="0.5"
                              transform="rotate(-135 2.81738 9.88904)" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_46_976">
                            <rect width="12" height="12" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>}
        </NavLink>
    )
}

export default TableItem;