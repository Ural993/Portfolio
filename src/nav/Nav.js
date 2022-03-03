import React from "react";
import style from './Nav.module.scss'
import {Link} from "react-scroll";


export const Nav = () => {
    const scrollUp = (id, e) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    };
    return (
        <div className={style.nav}>
            <Link href="/#" to={'main'}
                  activeClass={style.activeLink}
                  className={style.link}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}>Main </Link>
            <Link href="/#" to={'skills'}
                  activeClass={style.activeLink}
                  className={style.link}
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}>Skills </Link>
            <Link href="/#" to={'projects'}
                  activeClass={style.activeLink}
                  className={style.link}
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}>Projects</Link>
            <Link href="/#" to={'contacts'}
                  activeClass={style.activeLink}
                  className={style.link}
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}>Contacts</Link>
        </div>
    )
}
