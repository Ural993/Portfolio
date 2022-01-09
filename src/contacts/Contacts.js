import React from "react";
import style from './Contacts.module.css'
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <Title span ={'Contact '} h2={'Me'}/>
                    <form className={style.form} action="#">
                        <input className={style.inp} type="text"/>
                        <input className={style.inp} type="text"/>
                        <textarea className={style.textarea}></textarea>
                        <button className={style.btn}>Send</button>
                    </form>
        </div>
    )
}