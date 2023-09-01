import {useEffect, useRef, useState} from 'react';
import {userAPI} from "../../services/UserService";
import s from './Table.module.css'
import TableItem from "./TableItem";
import {useAppSelector} from "../../hooks/redux";
import Preloader from "../../UI/Preloader/Preloader";
import {IUser} from "../../models/IUser";

const Table = () => {
        const [currentPage, setCurrentPage] = useState<number>(0)
        const [newList, setNewList] = useState<IUser[]>([])
        const {data: currentResult, error, isFetching} = userAPI.useFetchAllUsersQuery({perPage: 20, currentPage})
        const {email, username, address, id} = useAppSelector(state => state.userReducer)
        const lastElement = useRef<HTMLDivElement | null>(null)
        const observer = useRef<IntersectionObserver | null>(null)

        useEffect(() => {
            if (isFetching) return
            if (observer.current) observer.current.disconnect()
            const cb = (entries: IntersectionObserverEntry[]) => {

                if (currentResult && entries[0].isIntersecting && currentPage < currentResult.meta.totalPages - 1) {
                    setCurrentPage(currentPage + 1)
                }
            };
            observer.current = new IntersectionObserver(cb);
            lastElement.current && observer.current.observe(lastElement.current)

        }, [isFetching, newList])

        useEffect(() => {
            if (!isFetching) {
                currentResult && setNewList([...newList, ...currentResult.items])
            }
        }, [ currentResult?.items])

        return (
            <div>
                <h2 className={s.title}>Participation listing (enable only for participants)</h2>
                <div className={s.header}>
                    <span className={s.columnTitle}>Name</span>
                    <span className={s.columnTitle}>Email</span>
                    <span className={s.columnTitle}>Wallet</span>
                </div>
                <div className={s.table}>
                    <TableItem address={address} email={email} id={id} username={username}/>

                    {isFetching && <Preloader/>}
                    {error && <h3 className={s.error}>404 Server problem </h3> }
                    {currentResult &&
                        newList.map((user) => {
                            return <TableItem {...user} key={user.id}/>
                        })
                    }
                    {currentResult?.items && <div className={s.lastElement} ref={lastElement}/>}

                </div>
            </div>
        );
    }
;

export default Table;