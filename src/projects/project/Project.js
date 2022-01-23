import React, {useState} from "react";
import style from './Project.module.scss'


export const Project = ({img, description, linkDemo, linkCode, title}) => {
    const [focused, setFocused] = useState(false)
    return (
        // <div className={style.project}>
        //     <div className={style.description} >
        //         {/*<a href="/#" className={style.view}>View</a>*/}
        //
        //
        //         <a
        //            className={focused ? style.previewWrapper : style.preview}
        //            style={props.style}
        //            onMouseOut={() => setFocused(false)}
        //            onMouseOver={() => setFocused(true)}
        //         >
        //             {focused ? <h4 onMouseOver={() => setFocused(true)} className={style.header}>VIEW</h4> : ''}
        //         </a>
        //     </div>
        //     <h3 className={style.title}>{props.title}</h3>
        //     <span className={style.text}>{props.text}</span>
        // </div>
        <div className={style.project}>
            <div className={style.img} style={img}>
                <div className={style.overlay}>
                    <div className={style.description}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className={style.links}>
                            <a href={linkDemo} className={style.btnDemo} target="_blank" rel="noreferrer">view demo</a>
                            <a href={linkCode} className={style.btnCode} target="_blank" rel="noreferrer">view code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}