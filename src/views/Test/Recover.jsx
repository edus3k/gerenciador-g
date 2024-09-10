import React from "react";
import './style.css'

import Back from '../../assets/Business.jpg'
import Logo from '../../assets/SCJ.png';

export default function Recover(){
    return(
        <div className="containerFull">
            <div className="containerBack"><img className="back" src={Back}/></div>
            <div className="container">
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