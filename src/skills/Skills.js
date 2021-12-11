import React from "react";
import style from './Skills.module.css'
import styleContainer from '../common/styles/container.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                    <Skill title={'React'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                    <Skill title={'Css'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                </div>
            </div>
        </div>
    )
}