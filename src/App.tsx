import React from 'react';
import Header from "./components/Header/Header";
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path={''} element={<HomePage/>}/>
                <Route path={'/*'} element={<HomePage/>}/>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/user/:id'} element={<UserPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;