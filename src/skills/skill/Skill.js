import React from "react";
import style from './Skill.module.css'
import ReactTooltip from "react-tooltip";


export const Skill = (props) => {
    return (
        <div className={style.iconWrapper}>
            <div className={style.skillIcon} style={props.style} data-tip="HTML5"> </div>
            <ReactTooltip place="top" type="warning" effect="solid"  />
        </div>
    )
}