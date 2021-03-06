import styled from "styled-components"
import { useState,useContext,useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import axios from "axios"
import TodayHabit from "./TodayHabit"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"

export default function TodayHabits(){
    const {userData} = useContext(UserContext);
    const [todayList,setTodayList]=useState('')
    let dones=''
    let enabled=''
    function renderToday(){
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,config);
        requisicao.then((resposta)=>setTodayList(resposta.data))
    }
    const doneList=todayList?(todayList.filter((e)=>e.done)):''

    
    useEffect(renderToday, []);
    return(
        <>
        <TitleAndSub enabled={doneList.length>0}>
            <h1> {`${dayjs().locale('pt-br').format("dddd")}, ${dayjs().format("D")}/${dayjs().format("MM")} `}</h1>
            <h2>{doneList.length>0
            ?`${(doneList.length/todayList.length*100).toFixed(0)}% dos hábitos concluídos`
        :'Nenhum hábito concluído ainda'}</h2>
        </TitleAndSub>

        {todayList
        ?todayList.map((e)=>{
                 return (<TodayHabit name={e.name} currentSequence={e.currentSequence} id={e.id} highestSequence={e.highestSequence} done={e.done} renderToday={renderToday}/>)
             })
             :''}
        
        
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
        color:${(props) => (props.enabled ? "green" : "#BABABA")};
    }
    
`
