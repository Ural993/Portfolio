import React from "react";
import style from './Title.module.css'


export const Title = (props) => {
    return (
            <div className={style.title}>
                <h2 ><span>{props.span}</span>{props.h2}</h2>
            </div>
    )
}