import React from "react";
import style from "../Separator/Separator.module.css"

export interface Props {
    variant: string
    firstText: string
    secondText: string
    thirdText: string
    fourthText: string
}

export const Separator = ({variant, firstText, secondText, thirdText, fourthText}: Props) => {
    if (variant==="a") {
        return (
            <div className={style.separatorBoxA}>
                <div className={style.t1A}>{firstText}</div>
                <div className={style.t2A}>{secondText}</div>
                <div className={style.t3A}>{thirdText}</div>
                <div className={style.t4A}>{fourthText}</div>
            </div>
        )
    } else if (variant==="b") {
        return (
            <div className={style.separatorBoxB}>
                <div className={style.t1B}>{firstText}</div>
                <div className={style.t2B}>{secondText}</div>
                <div className={style.t3B}>{thirdText}</div>
                <div className={style.t4B}>{fourthText}</div>
            </div>
        )
    } else if (variant==="c") {
        return (
            <div className={style.separatorBoxC}>
                <div className={style.t1C}>{firstText}</div>
                <div className={style.t2C}>{secondText}</div>
                <div className={style.t3C}>{thirdText}</div>
                <div className={style.t4C}>{fourthText}</div>
            </div>
        )
    }   
}