import React from "react";
import style from './Projects.module.css'
import {Project} from "./project/Project";
import styleContainer from "../common/styles/container.module.css";


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'TodoList'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                    <Project title={'Cocial Network'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                </div>
            </div>
        </div>
    )
}