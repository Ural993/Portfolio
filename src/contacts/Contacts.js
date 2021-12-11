import React from "react";
import style from './Contacts.module.css'


export const Contacts = () => {
    return (
        <div className={style.contacts}>
                <h2 className={style.title}>Contacts</h2>
                    <form className={style.form} action="#">
                        <input className={style.inp} type="text"/>
                        <input className={style.inp} type="text"/>
                        <textarea className={style.textarea}></textarea>
                        <button className={style.btn}>Send</button>
                    </form>
        </div>
    )
}