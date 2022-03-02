import React from "react";
import style from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";
import phoneIMG from '../assets/img/phone.png'
import addressIMG from '../assets/img/address.png'
import emailIMG from '../assets/img/email.png'
import telegramIMG from '../assets/img/telegram.png'
import linkedInIMG from '../assets/img/linkedin.png'
import githubIMG from '../assets/img/github.png'
import codewarsIMG from '../assets/img/codewars.png'
import styleContainer from "../common/styles/container.module.css";

export const Contacts = () => {
    const phone = {
        backgroundImage: `url(${phoneIMG})`,
    };
    const address = {
        backgroundImage: `url(${addressIMG})`,
    };
    const email = {
        backgroundImage: `url(${emailIMG})`,
    };
    return (
        <div className={style.contacts} id={'contacts'}>
            <Title span={'Contact '} h2={'Me'}/>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.contactsWrapper}>
                    <div className={style.short}>
                        <div className={style.listInner} style={address}>
                            <span>Ufa, Russia</span>
                        </div>
                        <div className={style.listInner} style={phone}>
                            <span>+8(917)4719454</span>
                        </div>
                        <div className={style.listInner} style={email}>
                            <span>ural-islamov@mail.ru</span>
                        </div>
                        <div className={style.socialIcons}>
                            <div className={style.socialIcon}>
                                <a target="_blank" href="https://t.me/Ural993">
                                    <img src={telegramIMG} alt=""/>
                                </a>
                            </div>
                            <div className={style.socialIcon}>
                                <a target="_blank" href="https://github.com/Ural993">
                                    <img src={githubIMG} alt=""/>
                                </a>
                            </div>
                            <div className={style.socialIcon}>
                                <a target="_blank" href="https://www.linkedin.com/in/ural-islamov-289a58160/">
                                    <img src={linkedInIMG} alt=""/>
                                </a>
                            </div>
                            <div className={style.socialIcon}>
                                <a target="_blank" href="https://www.codewars.com/users/Ural93">
                                    <img src={codewarsIMG} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.formWrapper}>
                        <form className={style.form} action="#">
                            <input className={style.inp} type="text" placeholder={'Name'}/>
                            <input className={style.inp} type="text" placeholder={'Email'}/>
                            <textarea className={style.textarea} placeholder={'Message'}></textarea>
                            <button className={style.btn}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}