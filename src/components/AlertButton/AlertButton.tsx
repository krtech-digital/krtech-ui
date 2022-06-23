import React, { InputHTMLAttributes } from "react";
import style from "../AlertButton/AlertButton.module.css"

export interface Props {
    severity: any
}


export const AlertButton = ({severity}: Props) => {
    
    function cancelIcon () {
        if (severity==="message" || severity==="info") {
          return style.cancelBlue
        } else if (severity==="success" || severity==="alertSuccess") {
            return style.cancelGreen
        } else if (severity==="alertFail") 
        return style.cancelRed
    }

    function colorBar () {
        if (severity==="message" || severity==="info") {
          return style.colorBarB
        } else if (severity==="success" || severity==="alertSuccess") {
            return style.colorBarG
        } else if (severity==="alertFail") 
        return style.colorBarR
    }

    function icon () {
        if (severity==="message") {
          return style.iconMessage
        } else if (severity==="info") {
            return style.iconInfo
        } else if (severity==="success") {
            return style.iconSuccess
        } else if (severity==="alertSuccess") {
            return style.iconAlertSuccess
        } else if (severity==="alertFail") 
        return style.iconAlertFail
    }

    function headerText () {
        if (severity==="message") {
          return "YOU'VE GOT MESSAGE!"
        } else if (severity==="info") {
            return "INFO"
        } else if (severity==="success") {
            return "SUCCESS!"
        } else if (severity==="alertSuccess") {
            return "ALL SET!"
        } else if (severity==="alertFail") 
        return "SOMETHING WENT WRONG :("
    }

    function descriptiveText () {
        if (severity==="message") {
          return "Check your inbox :)"
        } else if (severity==="info") {
            return "Info Text Placeholder"
        } else if (severity==="success") {
            return "Congrats, your message has been sent."
        } else if (severity==="alertSuccess") {
            return "Well done, you're all set!"
        } else if (severity==="alertFail") 
        return "We're so sorry, can you try again?"
    }


    
    return (
        <div className={style.alertBox}>
            <div className={colorBar()}></div>
            <div className={cancelIcon()}></div>
            <div className={icon()}></div>
            <div className={style.headerText}>{headerText()}</div>
            <div className={style.descriptionText}>{descriptiveText()}</div>
        </div>
    )
}