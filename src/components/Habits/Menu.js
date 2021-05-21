import { Link,useHistory } from "react-router-dom";
import styled from 'styled-components';
export default function Menu(){
    return(
        <>
        <Inf>
        <Link to={'/habitos'}>
        <div>
            Hábitos
        </div>
        </Link>

        <Link to={'/hoje'}>
        <Special>
            <p>Hoje</p>
        </Special>
        </Link>
        <Link to={'/historico'}>
        <div>
            Histórico
        </div>
        </Link>
        </Inf>
       
        </>
    )
}
const Inf = styled.div`
    width:100%;
    height:70px;
    position: fixed;
    bottom: 0;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    font-family: 'Lexend Deca', sans-serif;
    background-color: white;
    div{
        color: #52B6FF;
        
    }
`
const Special= styled.div`
        height: 91px;
        width: 91px;
        background-color: #52B6FF;
        text-align: center;
        line-height: 91px;
        border-radius: 50%;
        margin-bottom: 55px;
        p{
            color:#fff;
        }
        
`
