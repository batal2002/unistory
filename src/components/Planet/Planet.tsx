import React from 'react';
import s from "./Planet.module.css";

const Planet = () => {
    return (
        <div className={s.rings}>
            <div className={s.circle}></div>
            <div className={s.quarter}>
                <div className={s.quarterWrapper}>
                    <div className={s.dot1 + ' ' + s.dot}></div>
                    <div className={s.dot2 + ' ' + s.dot}></div>
                    <div className={s.dot3 + ' ' + s.dot}></div>
                </div>
            </div>
            <div className={s.img}></div>
        </div>
    );
};

export default Planet;