import React from 'react'
import "./InputField.css"

const InputField = (props: {inputLabel: string; placeholder: string}) => {
    return (
        <div className="input">
            <label htmlFor="input">{props.inputLabel}</label>
            <input className="field" id="input" placeholder={props.placeholder}>
                
            </input>
        </div>
    )
}

export default InputField