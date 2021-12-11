import React from "react";
import style from './Main.module.css'
import styleContainer from '../common/styles/container.module.css'


export const Main = () => {
    return (
        <div className={style.main}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>Ural Islamov</h1>
                    <p>Feontent Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    )
}