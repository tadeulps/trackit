import styled from "styled-components"
import { useState,useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import axios from "axios"
import ButtonDays from "./ButtonDays"
export default function NewHabit(props){
    const {userData} = useContext(UserContext);
    const [habitName,setHabitName]=useState('')
    const {controller,setController}=props
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [selectedDays,setSelectedDays]=useState([]);
    console.log(selectedDays)
    function createHabit(){
        const body={
            name: habitName,
	        days: selectedDays
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }
        const requisition=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);
        requisition.then(()=>setController(false))
        }
    return(
       
        <div>
            <Caixa>
             <input type="text" placeholder="nome do hábito" value={habitName} onChange={e => setHabitName(e.target.value)}/>
             <div>
             {days.map((e,i)=><ButtonDays day={e} id={i} selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>)}
             </div>

            <Save>
             <button onClick={()=>setController(false)}>Cancelar</button>
             <button onClick={createHabit}>Salvar</button>
             </Save>

             </Caixa>
            
        </div>

        

    )
}

const Caixa=styled.div`
    background-color: white;
    width: calc(100% - 36px);
    height: 180px;
  
    border-radius: 5px;
    margin: 22px auto;
    div{
        margin-left: 18px;
        margin-top: 8px;
    }
    input{
        margin-top: 18px;
        margin-left: 18px;
        width: calc(100% - 60px);
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        font-size: 20px;
        padding-left: 10px;
    }
    input::placeholder{
        color: #DBDBDB;

    }
   

`
const Save=styled.div`
    button{
        margin-top:28px;
        right: 10px;
        font-size: 16px;
        border-style: none;
        border-radius: 5px;
    }
    button:nth-of-type(1){
        width: 75px;
        color:#52B6FF;
        background-color: white;
        position: absolute;
        right: 35%;
    }
    button:nth-of-type(2){
        color:white;
        background-color: #52B6FF;
        width: 75px;
        position: absolute;
        right: 10%;
    }
`