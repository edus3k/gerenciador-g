import React from "react";
import './styler.css'

import icUser from '../../assets/user.png'
import icLogo from '../../assets/Logo.jpg'
import icEmployee from '../../assets/employee.png'
import icPeople from '../../assets/people.png'
import icContract from '../../assets/contract.png'
import icBuilding from '../../assets/building.png'
import icFolders from '../../assets/folders.png'
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="containerHome">
            <div className="header">
                <div className="headerTop">
                    
                </div>
                <div className="headerMain">
                    <div className="logoName">
                        <img className="icLogo" src={icLogo}/>
                    </div>
                    <div className="menu">
                        <from className="fromMenu">
                            <input className="inSearch" type="search"/>
                            <button className="btnSearch">Pesquisar</button>
                        </from>
                        <div className="linkTopMenu">
                            <Link className="inLinkTopMenu" to={"/home"}>Home</Link>
                            <Link className="inLinkTopMenu" to={"/cadastro"}>Cadastro</Link>
                            <Link className="inLinkTopMenu" to={"/arquivo"}>Arquivo</Link>
                            <div>
                                <h3 className="btnMenu">Menu</h3>
                            </div>
                        </div>
                    </div>
                    <div className="containerUser">
                        <img className="icUser" src={icUser}/>
                        <h2 className="nameUser">Eduardo Santos</h2>
                        <button className="btnExit" type="button">Sair</button>
                    </div>
                </div>
            </div>
            <div className="containerCenter">
                <div className="containerMenuLateral">
                    <div className="menuLateral">
                        <Link className="linkMenuLateral">Home</Link>
                        <Link className="linkMenuLateral">Cadastro</Link>
                        <Link className="linkMenuLateral">Funcionarios</Link>
                        <Link className="linkMenuLateral">Estagiários</Link>
                        <Link className="linkMenuLateral">Imoveis</Link>
                        <Link className="linkMenuLateral">Contratos</Link>
                        <Link className="linkMenuLateral">Configuração</Link>
                        <Link className="linkMenuLateral">Sair</Link>
                    </div>
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
                    <div className="cards">
                        <div className="cardImg">
                            <img className="icCardImg" src={icFolders}/>
                        </div>
                        <div>
                            <h2>Arquivos</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                
            </div>
        </div>
    )
}