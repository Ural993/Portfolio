import React from "react";
import style from './Main.module.scss'
import styleContainer from '../common/styles/container.module.css'
import photoIMG from "../assets/img/1.jpg";
import Particles from 'react-tsparticles';
import {TypingEffect} from "./TypingEffect/TypingEffect";


export const Main = () => {
    const particlesOptions = {
        particles: {
            number: {
                value: 160,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#777"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#d71616"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: "#d71616",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 250,
                    size: 5,
                    duration: 66,
                    opacity: 1,
                    speed: 3
                },
                repulse: {
                    distance: 0,
                    duration: 0.4
                },
                push: {
                    particles_nb: 10
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    }
    const photo = {
        backgroundImage: `url(${photoIMG})`,
    };

    return (
        <div className={style.main} id={'main'}>
            {/*<Particles className={style.particles} params={particlesOptions} />*/}
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.text}>
                    <span>Hello, I'm</span>
                    <h1>Ural Islamov</h1>
                    <TypingEffect/>
                </div>
                <div className={style.image}>
                    <div style={photo} className={style.photo}></div>
                    <div className={style.shape}></div>
                </div>
            </div>

        </div>
    )
}