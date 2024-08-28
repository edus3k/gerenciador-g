import React from "react";
import './style.css'

import Logo from '../../assets/Logo.jpg'

export default function Headers(){
    return(
        <div className="container">
            <div className="header">
                <div className="containerLogo"><img className="logo" src={Logo}/></div>
                <div className="containerSearch">
                    <from className="from">
                        <label className="label">Pesquisar</label>
                        <div>
                            <input className="in" type="search"/>
                        </div>
                    </from>
                    <button className="btnSubmit" type="submit">Pesquisar</button>
                </div>
                <nav className="nav">
                    <ul className="ul">
                        <li className="li"><a>Home</a></li>
                        <li className="li"><a>User</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}