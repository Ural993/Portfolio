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
        <div className={style.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title span ={'My '} h2={'Projects'}/>
                <div className={style.projects}>
                    <Project title={"React Tasks"}
                             img={socialNetwork}
                             description={"React, Redux, TS, RestAPI, Thunk, Unit Tests"}
                             linkDemo={"https://pmuzychenko.github.io/react-homeworks"}
                             linkCode={"https://github.com/pmuzychenko/react-homeworks"}/>
                    <Project title={"React Tasks"}
                             img={todolist}
                             description={"React, Redux, TS, RestAPI, Thunk, Unit Tests"}
                             linkDemo={"https://pmuzychenko.github.io/react-homeworks"}
                             linkCode={"https://github.com/pmuzychenko/react-homeworks"}/>
                </div>
            </div>
        </div>
    )
}