import Header from "./Header"
import Menu from "./Menu"
import styled from "styled-components"

export default function Historic(){
    return(
        <>
        <Header/>
        <HistBox>
            <h1>
                Histórico
            </h1>
            <h2>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
            </h2>
        </HistBox>
        <Menu/>
        </>
    )
}
const HistBox=styled.div`
    margin-top: 100px;
    margin-left: 17px;
    h1{
        color: #126BA5;
        font-size:23px;
        margin-bottom: 17px;
    }
    h2{
        color: #666666;
        font-size: 18px;
    }
`