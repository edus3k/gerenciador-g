import React from "react";
import './styler.css'

import icUser from '../../assets/user.png'
import icLogo from '../../assets/Logo.jpg'
import icEmployee from '../../assets/employee.png'
import icPeople from '../../assets/people.png'
import icContract from '../../assets/contract.png'
import icBuilding from '../../assets/building.png'

export default function Home(){
    return(
        <div className="containerHome">
            <div className="header">
                <div className="logoName">
                    <img className="icLogo" src={icLogo}/>
                </div>
                <div></div>
                <div className="containerUser">
                    <img className="icUser" src={icUser}/>
                    <h2 className="nameUser">Eduardo Santos</h2>
                    <button className="btnExit" type="button">Sair</button>
                </div>
            </div>
            <div className="containerCenter">
                <div className="containerMenuLateral">
                    
                </div>
                <div className="containerCards">
                    <div className="cards">
                        <div className="cardImg">
                            <img className="icCardImg" src={icEmployee}/>
                        </div>
                        <div>
                            <h2>Funcionarios</h2>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="cardImg">
                            <img className="icCardImg" src={icPeople}/>
                        </div>
                        <div>
                            <h2>Estagiários</h2>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="cardImg">
                            <img className="icCardImg" src={icContract}/>
                        </div>
                        <div>
                            <h2>Contratos</h2>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="cardImg">
                            <img className="icCardImg" src={icBuilding}/>
                        </div>
                        <div>
                            <h2>Imoveis</h2>
                        </div>
                    </div>
                </div>
                <div className="containerLogs">
                        <h3>ok</h3>
                </div>
            </div>
            <div className="footer">
                
            </div>
        </div>
    )
}