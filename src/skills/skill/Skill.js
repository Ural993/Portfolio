import React from "react";
import style from './Skill.module.css'


export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div style={props.style} className={style.icon}></div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.text}>{props.text}</span>
        </div>
    )
}