import styled from 'styled-components'
import { Link,useHistory } from "react-router-dom";
import  Logo from "../styles/Logo"
import  Box from "../styles/Box"
import { useState } from 'react';
import axios from 'axios';
import UserContext from "../contexts/UserContext"
import React, { useContext } from 'react';

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {userData, setUserData}=useContext(UserContext);
    let history=useHistory()
    function Logar(){
        const body={
            email,
            password
        }
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body);
        requisicao.then((resposta)=>{
            setUserData(resposta.data)
            
            history.push('/hoje')
           
        })
        requisicao.catch(()=>(alert('erro')))

    
    }
    return(
        <>
        
        <Logo>
            TrackIt
        </Logo>

        <Box>
            <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="senha"value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={Logar}>Entrar</button>
            <Link to={`/cadastro`}>
            <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Box>
        
        </>
    )
}

