import React from 'react';
import s from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={`${s.hero} container`}>
            <div className={s.wrapper}>
                <h1 className={s.title}>
                    Explore Your own planet
                    In <span className={s.empty}>our New</span> metaverse
                </h1>
                <div className={s.rings}>
                    <div className={s.circle}></div>
                    <div className={s.quarter}>
                        <div className={s.quarterWrapper}>
                            <div className={s.tag}></div>
                            <div className={s.dot1 + ' ' + s.dot}></div>
                            <div className={s.dot2 + ' ' + s.dot}></div>
                            <div className={s.dot3 + ' ' + s.dot}></div>
                        </div>
                    </div>
                    <div className={s.img}></div>
                </div>
                <h1 className={s.title + ' ' + s.orangeTitle}>
                    Explore Your own planet
                    In <span className={s.empty}>our New</span> metaverse
                </h1>

                <p className={s.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className={s.stats}>
                <h3 className={s.statsTitle}>Roadmap stats</h3>
                <ul>
                    <li className={s.item}>
                        <span className={s.counter}>12, 345</span>
                        <p className={s.description}>Lorem ipsum dolor</p>
                    </li>
                    <li className={s.item}>
                        <span className={s.counter}>12, 345</span>
                        <p className={s.description}>Lorem ipsum dolor</p>
                    </li>
                    <li className={s.item}>
                        <span className={s.counter}>12, 345</span>
                        <p className={s.description}>Lorem ipsum dolor</p>
                    </li>
                </ul>

            </div>
        </section>
    );
};

export default Hero;