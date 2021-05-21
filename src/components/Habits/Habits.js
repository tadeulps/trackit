import styled from 'styled-components';
import ButtonsOnHabits from "./ButtonsOnHabits"
import axios from "axios"
import UserContext from '../../contexts/UserContext';
import { useState,useContext,useEffect } from 'react';
export default function Habits({name,days,id,renderMyHabits}){
    const {userData} = useContext(UserContext);
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    function deleter(){
        let verify=window.confirm("Você realmente quer apagar esse hábito?")
        if(verify){
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }
        const deleting=axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config)
        deleting.then(renderMyHabits)
    }
        
    }

    return (
        <HabitBox>
            <div>
            <p>{name}</p>
            {weekdays.map((e,i)=><ButtonsOnHabits day={e} id={i} markedDays={days}/>)}
            </div>
            <Icon>
            <ion-icon name="trash-outline" onClick={deleter}></ion-icon>
            </Icon>
        </HabitBox>
    )
}

const HabitBox=styled.div`
    background-color: white;
    width: calc(100% - 36px);
    border-radius: 5px;
    margin: 22px auto 10px auto;
    position: relative;
    p{
       padding-bottom: 8px;
       font-family: 'Lexend Deca', sans-serif;
       color: #666666;
    }
    div{
        padding-left: 18px;
        padding-top: 8px;
        
    }
   
`
const Botao=styled.button`
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-right: 3px;
        font-size: 20px;
        background-color: white;
        color:#DBDBDB;
        margin-bottom: 11px;
`
const Icon=styled.div`
    position: absolute;
    right:10px;
    top:2px;
    font-size: 15px;
`