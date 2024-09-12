import React, { useState,useEffect } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

import './styler.css'
import Scj from '../../assets/SCJ.png'

export default function Signin(){
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const emailRef = useRef()
    const passwordRed = useRef()

    useEffect(() => {
        if (isSubmitted) {
          navigate("/home");
        }
    }, [isSubmitted, navigate]);

    function handleSubmit(){
        console.log(emailRef);
        setIsSubmitted(true);
    } 
    
    return(
        <div className="containerSignin">
            <div className="containerSigninElemets">
                <img className="scj" src={Scj}/>
                <div className="containerFromLink">
                    <Form className="conatinerFromLogin" onSubmit={handleSubmit} >
                        <label className="labelLogin">Login</label>
                        <label className="labelEmail">Email:</label>
                        <input  ref={emailRef} className="inEmail" type="email" placeholder="Email"/>
                        <label className="labelPassword">Passward:</label>
                        <input ref={passwordRed} className="inPassword" type="password" placeholder="Password"/>
                        <button type="submit" className="btnLogin">Entrar</button>
                    </Form>
                    <Link className="linkRecoverPassword" to="/recover.code">Esqueceu sua senha?</Link>
                    <Link className="linkCreat" to="/create.adm">Cadastre-se</Link>
                </div>
            </div>
            
        </div>
    )
}