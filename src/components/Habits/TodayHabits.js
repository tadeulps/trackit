import styled from "styled-components"
import { useState,useContext,useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import axios from "axios"
import TodayHabit from "./TodayHabit"
export default function TodayHabits(){
    const {userData} = useContext(UserContext);
    const [todayList,setTodayList]=useState('')
    console.log(todayList)
    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,config);
        requisicao.then((resposta)=>setTodayList(resposta.data))
		
	}, []);
    return(
        <>
        <TitleAndSub>
            <h1>Segunda, 17/05</h1>
            <h2>Nenhum hábito concluído ainda</h2>
        </TitleAndSub>
        {todayList.map((e)=>{
                 return (<TodayHabit name={e.name} currentSequence={e.currentSequence} id={e.id} highestSequence={e.highestSequence}/>)
             })}
        
        </>
    )
}
const TitleAndSub=styled.div`
    margin-top: 100px;
    margin-left: 18px;
    h1{
        color: #126BA5;
        font-size: 23px;
        margin-bottom: 5px;
    }
    h2{
        color:#BABABA;
    }
    
`
