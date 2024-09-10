import React, { useState,useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useRef } from "react";

import './styler.css'
import Scj from '../../assets/SCJ.png'

export default function Recover(){
    
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const emailRef = useRef()
    const codRef = useRef()

    useEffect(() => {
        if (isSubmitted) {
          navigate("/recover.code-password");
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
                        <label className="labelInforRecover">
                            Informe seu email para enviarmos um codigo para fazer a recuperação de senha!
                        </label>
                        <label className="labelEmail">Email:</label>
                        <input  ref={emailRef} className="inEmail" type="email" placeholder="Email"/>
                        <button type="submit" className="btnEmailCod">Enviar Codigo</button>
                    </Form>
                </div>
            </div>
            
        </div>
    )
}