import React from 'react';
import style from './ModalArrow.module.scss'
import {Link} from "react-scroll";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {IconButton} from "@material-ui/core";

const ModalArrow = () => {


    document.addEventListener('scroll', () => {

        if (window.scrollY >= 300) {
            document.getElementById("arrow").className = (`${style.arrow} ${style.showArrow}`)
        } else {
            document.getElementById("arrow").className = (style.arrow)
        }
    });

    return (
        <Link to="main"
              className={style.arrow}
              id={'arrow'}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}>
            <IconButton>
                <KeyboardArrowUpIcon className={style.icon}/>
            </IconButton>
        </Link>
    );
};

export default ModalArrow;