import React from "react";
import './style.css'

import Logo from '../../assets/SCJ.png';

export default function Recover(){
    return(
        <div className="container">
            <div></div>
            <div className="containerFull">
                <div className="containerLogo"><img className="logo" src={Logo}/></div>
                <h2>
                    Informe seu email para refazer sua senha!
                </h2>
                <from className="containerFrom">
                    <div className="containerLabel">
                        <label className="label"> Email:</label>
                        <input/>
                    </div>
                    <button>Enviar</button>
                </from>
            </div>
        </div>
    )
}