import React from "react";
import style from './Project.module.scss'


export const Project = ({img, description, linkDemo, linkCode, title}) => {
    return (
        <div className={style.project}>
            <div className={style.img} style={img}>
                <div className={style.overlay}>
                    <div className={style.description}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className={style.links}>
                            <a href={linkDemo} className={style.btnDemo} target="_blank" rel="noreferrer">view demo</a>
                            <a href={linkCode} className={style.btnCode} target="_blank" rel="noreferrer">view code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}