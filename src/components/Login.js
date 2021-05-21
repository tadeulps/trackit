import styled from 'styled-components'
import { Link,useHistory } from "react-router-dom";
import  Logo from "../styles/Logo"
import  Box from "../styles/Box"
import { useState } from 'react';
import axios from 'axios';
import UserContext from "../contexts/UserContext"
import React, { useContext } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {userData, setUserData}=useContext(UserContext);
    const [disabler,setDisabler]=useState(false)
    let history=useHistory()
    function Logar(){
        setDisabler(true)
        const body={
            email,
            password
        }
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body);
        requisicao.then((resposta)=>{
            setUserData(resposta.data)
            setDisabler(false)
            history.push('/hoje')
           
        })
        requisicao.catch(()=>{
            alert('Erro na tentativa de login')
            setDisabler(false)})

    
    }
    return(
        <>
        
        <Logo>
            <img src="./images/Group 8.png" alt=""/>
        </Logo>

        <Box>
            <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled={disabler}/>
            <input type="password" placeholder="senha"value={password} onChange={e => setPassword(e.target.value)} disabled={disabler}/>
            <button onClick={Logar} disabled={disabler}>{disabler?<Loader
        type="ThreeDots"
        color="white"
        height={30}
        width={100}
        timeout={3000} //3 secs
      />:'Entrar'}</button>
            <Link to={`/cadastro`}>
            <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
          
        </Box>
        
        </>
    )
}
