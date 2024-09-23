import React, { useState,useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api"

import './styler.css'
import Scj from '../../assets/SCJ.png'

export default function Create(){
    
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(() => {
        if (isSubmitted) {
          navigate("/");
        }
    }, [isSubmitted, navigate]);

    async function createUsers(inName, inEmail, inPassword){
        try {

            const user = {
              name: inName,
              email: inEmail,
              password: inPassword
            };
            await api.post('/register', user);

            console.log('Usuário criado com sucesso.');
            alert("Usuário criado com sucesso!");
            setIsSubmitted(true);

        } catch (erro) {
            console.error('Erro ao criar usuário:', erro);
            alert("Erro ao criar usuário");
        }
    }

    function handleSubmit(){
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        if(!name){
            alert('Por favor, informe seu nome.');
        }
        else if (!email.includes('@')) {
          alert('Por favor, insira um email válido.');
        }
        else if (password.length < 6) {
          alert('A senha deve ter pelo menos 6 caracteres.');
          return false;
        }else{
            createUsers(name, email, password);
        }

    } 
    
    return(
        <div className="containerCreate">
            <div className="containerCreateElemets">
                <img className="scj" src={Scj}/>
                <div className="containerFromLink">
                    <Form className="conatinerFromCreate" onSubmit={handleSubmit} >
                        <label className="labelInforCreate">
                            Informe os dados abaixo para a criação de conta.
                        </label>
                        <label className="labelEmail">Name:</label>
                        <input  ref={nameRef} className="inName" type="text" placeholder="Nome"/>
                        <label className="labelEmail">Email:</label>
                        <input  ref={emailRef} className="inEmail" type="email" placeholder="Email"/>
                        <label className="labelEmail">Password:</label>
                        <input  ref={passwordRef} className="inPassword" type="password" placeholder="Password"/>
                        <button type="submit" className="btnEmailCod">Registra-se</button>
                    </Form>
                </div>
            </div>
            
        </div>
    )
}