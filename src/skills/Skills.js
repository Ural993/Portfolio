import React from "react";
import style from './Skills.module.css'
import styleContainer from '../common/styles/container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import socialNetworkIMG from "../assets/img/socialNetwork.jpg";
import reactIMG from "../assets/img/react.png"
import jsIMG from "../assets/img/js.png"
import cssIMG from "../assets/img/css.png"

export const Skills = () => {
        const react = {
            backgroundImage: `url(${reactIMG})`,
        };
    const js = {
        backgroundImage: `url(${jsIMG})`,
    };
    const css = {
        backgroundImage: `url(${cssIMG})`,
    };
    return (
        <div className={style.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title span ={'My '} h2={'Skills'}/>
                <div className={style.skills}>
                    <Skill  style={js} title={'JS'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                    <Skill style={react} title={'React'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                    <Skill style={css} title={'Css'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet.'}/>
                </div>
            </div>
        </div>
    )
}