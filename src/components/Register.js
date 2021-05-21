import { Link,useHistory } from "react-router-dom";
import  Logo from "../styles/Logo"
import  Box from "../styles/Box"
import { useState } from 'react';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Register(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [disabler,setDisabler]=useState(false)
    let history=useHistory()
    function Cadastro(){
        setDisabler(true)
        const body={
            email,
            name,
            image,
            password
        }
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body);
        requisicao.then(()=>(history.push('/')))
        requisicao.catch(()=>{
            alert('Erro na tentativa de cadastro')
            setDisabler(false)})
    }
    return(
        <>
        <Logo>
            TrackIt
        </Logo>

        <Box>
            <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled={disabler} />
            <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} disabled={disabler} />
            <input type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)} disabled={disabler} />
            <input type="url" placeholder="foto" value={image} onChange={e => setImage(e.target.value)} disabled={disabler} />
            <button onClick={Cadastro} disabled={disabler}>{disabler?<Loader
        type="ThreeDots"
        color="white"
        height={30}
        width={100}
        timeout={3000} //3 secs
      />:'Cadastrar'}</button>
            <Link to={`/`} >
            <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Box>
        </>
    )
}