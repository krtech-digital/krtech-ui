import React, { InputHTMLAttributes, useState } from "react";
import style from "../Stepper/Stepper.module.css"


export interface Props {
    minValue: number
    maxValue: number
}

export const Stepper = ({minValue, maxValue}: Props) => {
    

    const[counter, setCounter] = useState(0)

    function min(){
        if (counter <= minValue) {
            setCounter(minValue)
        }
    }

    function max(){
        if (counter >= maxValue) {
            setCounter(minValue)
        }
    }

    return (
        <div className={style.stepperBox}>
            <button onClick={() => {
                setCounter(counter-1)
                min()
            }} className={style.minus}>{"-"}</button>
            <div className={style.counter}>{counter}</div>
            <button onClick={() => {
                setCounter(counter+1)
                max()
            }} className={style.plus}>{"+"}</button>
        </div>
    )
}