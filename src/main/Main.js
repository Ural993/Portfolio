import React from "react";
import style from './Main.module.css'
import styleContainer from '../common/styles/container.module.css'
import photoIMG from "../assets/img/photo.jpg";


export const Main = () => {
    const photo = {
        backgroundImage: `url(${photoIMG})`,
    };
    return (
        <div className={style.main} id={'main'}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div style={photo} className={style.photo}></div>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>Ural Islamov</h1>
                    <p>Feontent Developer</p>
                </div>

            </div>

        </div>
    )
}