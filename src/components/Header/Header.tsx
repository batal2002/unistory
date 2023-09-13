import s from './Header.module.css'
import React from "react";
import {useEthers} from "@usedapp/core";
import {NavLink} from "react-router-dom";
import Preloader from "../../UI/Preloader/Preloader";
import Button from "../../UI/Button/Button";

const Header = () => {
    const {activateBrowserWallet, account, isLoading} = useEthers()

    return (
        <header className={`${s.header} container`}>
            <NavLink to={'/home'} className={s.logo}>
                LOGO
            </NavLink>

            <div className={s.wrapper}>
                {isLoading && <Preloader/>}
                {account && <span className={s.account}>{account}</span>}
                {!account && !isLoading && <Button type={'button'} onClick={() => activateBrowserWallet()}>
                    Connect metamask
                </Button>}

            </div>
        </header>
    );
};

export default Header;