import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'


function Header() {
    return (
        <div className={"nav"}>
            <button className={"mainMenuButton"}>nav</button>
            <div className={"dropdownChild"}>
                <NavLink to="/pre-junior">preJunior </NavLink>
                <NavLink to="/junior">Junior </NavLink>
                <NavLink to="/junior-plus">Junior+</NavLink>
            </div>
        </div>
    )
}
export default Header
