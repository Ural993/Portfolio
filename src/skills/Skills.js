import React from "react";
import style from './Skills.module.css'
import styleContainer from '../common/styles/container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactIMG from "../assets/img/react.png"
import jsIMG from "../assets/img/javascript.png"
import tsIMG from "../assets/img/typescript.png"
import css3IMG from "../assets/img/css3.png"
import html5IMG from "../assets/img/html5.png"
import sassIMG from "../assets/img/sass.png"
import npmIMG from "../assets/img/npm.png"
import gitIMG from "../assets/img/git.png"

export const Skills = () => {
        const react = {
            backgroundImage: `url(${reactIMG})`,
        };
    const js = {
        backgroundImage: `url(${jsIMG})`,
    };
    const ts = {
        backgroundImage: `url(${tsIMG})`,
    };
    const css3= {
        backgroundImage: `url(${css3IMG})`,
    };
    const html5 = {
        backgroundImage: `url(${html5IMG})`,
    };
    const sass = {
        backgroundImage: `url(${sassIMG})`,
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
                <Title span ={'My '} h2={'Skills'}/>
                <div className={style.skills}>
                    <Skill  style={react} title={'JS'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                    <Skill style={js} title={'React'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                    <Skill style={ts} title={'Css'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                    <Skill style={html5} title={'Css'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                    <Skill style={css3} title={'Css'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                    <Skill style={sass} title={'Css'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                    <Skill style={npm} title={'Css'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                    <Skill style={git} title={'Css'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                </div>
            </div>
        </div>
    )
}