import React, { InputHTMLAttributes } from "react";
import style from "../Input/Input.module.css"

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const Input = ({label,...props}: Props) => {
    return (
        <form>
        <p className={style.label}>{label}</p>
        <input className={style.input} {...props}>
        </input>
        </form>
    )
}

