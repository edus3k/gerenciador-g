import React from "react";
import './style.css'

import Back from '../../assets/Business.jpg'
import Logo from '../../assets/SCJ.png';

export default function Signin(){
    return(
        <div className="containerFull">
            <div className="containerBack"><img className="back" src={Back}/></div>
            <div className="container">
                <div className="containerLogo"><img className="logo" src={Logo}/></div>
                <from className="containerFrom">
                    <div className="containerLabel">
                        <label className="label"> Usuario:</label>
                        <input className="in"/>
                    </div>
                    <div className="containerLabel">
                        <label className="label"> Password:</label>
                        <input className="in"/>
                    </div>
                    <button>Login</button>
                </from>
                <div>
                    <a><h5>Recuperar Senha!</h5></a>
                    <a><h5>Criar uma Conta.</h5></a>
                </div>
            </div>
        </div>
    )
}