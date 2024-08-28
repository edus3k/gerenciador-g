import React from "react";
import './style.css'

import Logo from '../../assets/SCJ.png';

export default function Create(){
    return(
        <div className="container">
            <div className="containerFull">
                <div className="containerLogo"><img className="logo" src={Logo}/></div>
                <h2>
                    Vamos Criar sua Conta!
                </h2>
                <from className="containerFrom">
                    <div className="containerLabel">
                        <label className="label"> Nome:</label>
                        <input/>
                    </div>
                    <div className="containerLabel">
                        <label className="label"> CPF:</label>
                        <input/>
                    </div>
                    <div className="containerLabel">
                        <label className="label"> Email:</label>
                        <input/>
                    </div>
                    <div className="containerLabel">
                        <label className="label"> Password:</label>
                        <input/>
                    </div>
                    <div className="containerLabel">
                        <label className="label"> Cod-Acesso:</label>
                        <input/>
                    </div>
                    <button>Enviar</button>
                </from>
            </div>
        </div>
    )
}