import React from "react";
import style from "./Projects.module.scss"
import {Project} from "./project/Project";
import styleContainer from "../common/styles/container.module.css";
import {Title} from "../common/components/title/Title";
import socialNetworkIMG from "../assets/img/socialNet.png"
import todolistIMG from "../assets/img/todo.png"
import Fade from 'react-reveal/Fade';


export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkIMG})`,
    };
    const todolist = {
        backgroundImage: `url(${todolistIMG})`,
    };

    return (
        <div className={style.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title span={'My '} h2={'Projects'}/>
                <div className={style.projects}>
                    <Fade left>
                        <Project title={"Cards"}
                                 img={socialNetwork}
                                 description={"React, Redux, TS, RestAPI, Thunk, Unit Tests"}
                                 linkDemo={"https://Ural993.github.io/Cards"}
                                 linkCode={"https://github.com/Ural993/Cards"}/>
                    </Fade>
                    <Fade right>
                    <Project title={"TodoList"}
                             img={todolist}
                             description={"React, Redux, TS, RestAPI, Thunk, Unit Tests"}
                             linkDemo={"https://ural993.github.io/TodoList_IT-INCUBATOR"}
                             linkCode={"https://github.com/Ural993/TodoList_IT-INCUBATOR"}/>
                    </Fade>
                </div>
            </div>
        </div>
    )
}