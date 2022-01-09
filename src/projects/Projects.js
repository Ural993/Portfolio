import React from "react";
import style from "./Projects.module.css"
import {Project} from "./project/Project";
import styleContainer from "../common/styles/container.module.css";
import {Title} from "../common/components/title/Title";
import socialNetworkIMG from "../assets/img/socialNetwork.jpg"
import todolistIMG from "../assets/img/todolist.jpg"

export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkIMG})`,
    };
    const todolist = {
        backgroundImage: `url(${todolistIMG})`,
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title span ={'My '} h2={'Projects'}/>
                <div className={style.projects}>
                    <Project style={todolist} title={'TodoList'}
                             text={'Этот проект я делал.'}/>
                    <Project style={socialNetwork} title={'Cocial Network'}
                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                </div>
            </div>
        </div>
    )
}