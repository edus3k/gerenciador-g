import React from "react";
import './style.css'

import Logo from '../../assets/SCJ.png';

export default function Signin(){
    return(
        <div className="container">
            <div></div>
            <div className="containerFull">
                <div className="containerLogo"><img className="logo" src={Logo}/></div>
                <from className="containerFrom">
                    <div className="containerLabel">
                        <label className="label"> Usuario:</label>
                        <input/>
                    </div>
                    <div className="containerLabel">
                        <label className="label"> Usuario:</label>
                        <input/>
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