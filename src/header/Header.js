import React from "react";
import style from './Header.module.css'
import {Nav} from "../nav/Nav";
import styleContainer from "../common/styles/container.module.css";


export const Header = () => {
    document.addEventListener('scroll', ()=> {

        if (window.scrollY >= 400) {
            document.getElementById("head").className=(`${style.header} ${style.untransparentHeader}`)
        } else {
            document.getElementById("head").className=(style.header)
        }
    });
    return (
        <div className={style.header} id={'head'}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Nav/>
            </div>
        </div>
    )
}