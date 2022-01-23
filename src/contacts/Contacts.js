import React from "react";
import style from './Contacts.module.css'
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={style.contacts} id={'contacts'}>
            <Title span ={'Contact '} h2={'Me'}/>
                    <form className={style.form} action="#">
                        <input className={style.inp} type="text" placeholder={'Name'}/>
                        <input className={style.inp} type="text" placeholder={'Email'}/>
                        <textarea className={style.textarea} placeholder={'Message'}></textarea>
                        <button className={style.btn}>Send</button>
                    </form>
        </div>
    )
}