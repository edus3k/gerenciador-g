import React, { useState,useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useRef } from "react";

import './styler.css'
import Scj from '../../assets/SCJ.png'

export default function RecoverPassword(){
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const emailRef = useRef()
    const codRef = useRef()
    const passwordRed = useRef()

    useEffect(() => {
        if (isSubmitted) {
          navigate("/");
        }
    }, [isSubmitted, navigate]);

    function handleSubmit(){
        console.log(emailRef);
        setIsSubmitted(true);
    }  
    
    return(
        <div className="containerRecover">
            <div className="containerRecoverElemets">
                <img className="scj" src={Scj}/>
                <div className="containerFromLink">
                    <Form className="conatinerFromRecover" onSubmit={handleSubmit} >
                        <label className="labelInforRecover">Informe o codigo e sua nova senha</label>
                        <label className="labelcod">Codigo:</label>
                        <input  ref={codRef} className="inCod" type="text" placeholder="Codigo"/>
                        <label className="labelPassword">Passward:</label>
                        <input ref={passwordRed} className="inPassword" type="password" placeholder="Password"/>
                        <button type="submit" className="btnRecover">Recuperar Senha</button>
                    </Form>
                </div>
            </div>
            
        </div>
    )
}