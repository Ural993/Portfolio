import React from "react";
import style from './Footer.module.css'


export const Footer = () => {
    return (
        <div className={style.footer}>
                <h2 className={style.title}>Ural Islamov</h2>
                <div className={style.wrapper}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
                <div>© 2021 Все права защищены</div>
        </div>
    )
}