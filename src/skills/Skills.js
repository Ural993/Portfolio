import React from "react";
import style from './Skills.module.scss'
import styleContainer from '../common/styles/container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactIMG from "../assets/img/react.png"
import reduxIMG from "../assets/img/redux.png"
import jsIMG from "../assets/img/javascript.png"
import tsIMG from "../assets/img/typescript.png"
import css3IMG from "../assets/img/css3.png"
import html5IMG from "../assets/img/html5.png"
import sassIMG from "../assets/img/sass.png"
import restApiIMG from "../assets/img/restApi.png"
import npmIMG from "../assets/img/npm.png"
import gitIMG from "../assets/img/git.png"


export const Skills = () => {
    const react = {
        backgroundImage: `url(${reactIMG})`,
    };
    const redux = {
        backgroundImage: `url(${reduxIMG})`,
    };
    const js = {
        backgroundImage: `url(${jsIMG})`,
    };
    const ts = {
        backgroundImage: `url(${tsIMG})`,
    };
    const css3 = {
        backgroundImage: `url(${css3IMG})`,
    };
    const html5 = {
        backgroundImage: `url(${html5IMG})`,
    };
    const sass = {
        backgroundImage: `url(${sassIMG})`,
    };
    const restApi = {
        backgroundImage: `url(${restApiIMG})`,
    };
    const npm = {
        backgroundImage: `url(${npmIMG})`,
    };
    const git = {
        backgroundImage: `url(${gitIMG})`,
    };
    return (
        <div className={style.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title span={'My '} h2={'Skills'}/>

                        <div className={style.skills}>
                            <Skill style={react} title={'React'}/>
                            <Skill style={redux} title={'Redux'}/>
                            <Skill style={js} title={'JavaScript'}/>
                            <Skill style={ts} title={'TypeScript'}/>
                            <Skill style={html5} title={'Html5'}/>
                            <Skill style={css3} title={'Css3'}/>
                            <Skill style={sass} title={'Sass'}/>
                            <Skill style={restApi} title={'rest api'}/>
                            <Skill style={npm} title={'npm'}/>
                            <Skill style={git} title={'git'}/>
                        </div>


            </div>
        </div>
    )
}