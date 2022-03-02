import React from "react";
import style from './Skill.module.scss'
import Tilt from 'react-tilt'
import Fade from 'react-reveal/Fade';



export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <Fade bottom>
                <Tilt className="Tilt" options={{max: 50}}>
                    <div className={style.iconWrapper}>
                        <div className={style.skillIcon} style={props.style}></div>
                    </div>
                </Tilt>
            <h3 className={style.skillTitle}>{props.title}</h3>
            </Fade>
        </div>

    )
}