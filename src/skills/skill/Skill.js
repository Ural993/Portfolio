import React from "react";
import style from './Skill.module.scss'


export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.iconWrapper}>
                <div className={style.skillIcon} style={props.style}></div>
            </div>
            <h3 className={style.skillTitle}>{props.title}</h3>
        </div>

    )
}