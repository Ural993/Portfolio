import React from "react";
import style from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <a href="/#" className={style.view}>View</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.text}>{props.text}</span>
        </div>
    )
}