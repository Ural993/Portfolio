import React from "react";
import style from './Header.module.css'
import {Nav} from "../nav/Nav";
import styleContainer from "../common/styles/container.module.css";


export const Header = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Nav/>
            </div>
        </div>
    )
}