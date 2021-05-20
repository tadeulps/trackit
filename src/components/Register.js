import { Link,useHistory } from "react-router-dom";
import  Logo from "../styles/Logo"
import  Box from "../styles/Box"
import { useState } from 'react';
import axios from 'axios';


export default function Register(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    let history=useHistory()
    function Cadastro(){
        const body={
            email,
            name,
            image,
            password
        }
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body);
        requisicao.then(()=>(history.push('/')))
        requisicao.catch(()=>(alert('erro')))
    }
    return(
        <>
        <Logo>
            TrackIt
        </Logo>

        <Box>
            <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
            <input type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)} />
            <input type="url" placeholder="foto" value={image} onChange={e => setImage(e.target.value)} />
            <button onClick={Cadastro}>Cadastrar</button>
            <Link to={`/`} >
            <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Box>
        </>
    )
}