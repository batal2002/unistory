import React, {useEffect, useState} from 'react';
import Hero from "../components/Hero/Hero";
import Main from "../components/Main/Main";
import Popup from "../components/Popup/Popup";
import {useEthers} from "@usedapp/core";

const HomePage = () => {
    const {account, isLoading} = useEthers()
    const [firstLoad, setFirstLoad] = useState<boolean>(false)

    useEffect(() => {
        setFirstLoad(true)
    }, [])

    return (
        <>
            {!isLoading && !account && firstLoad && <Popup callBack={setFirstLoad}/>}
            <Hero/>
            <Main/>
        </>
    );
};

export default HomePage;