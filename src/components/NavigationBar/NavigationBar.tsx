import React from "react";
import style from "../NavigationBar/NavigationBar.module.css"

export const NavigationBar = () => {
    return (
        <div className={style.navigationBarContainer}>
            <a href="#1" id="1" className={style.menu1}>{"MENU ITEM"}</a>
            <a href="#2" id="2" className={style.menu2}>{"MENU ITEM"}</a>
            <a href="#3" id="3" className={style.menu3}>{"MENU ITEM"}</a>
            <a href="#4" id="4" className={style.menu4}>{"MENU ITEM"}</a>
        </div>
    )
}