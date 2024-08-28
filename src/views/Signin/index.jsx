import React from "react";
import './style.css'

import Business from '../../assets/Business.jpg';

export default function Signin(){
    return(
        <div className="container">
            <div></div>
            <div className="containerFull">
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