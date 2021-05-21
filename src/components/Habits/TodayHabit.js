import styled from "styled-components"
import axios from "axios"
import { useState,useContext,useEffect } from 'react';
import UserContext from '../../contexts/UserContext';

export default function TodayHabit({name,currentSequence,highestSequence,id,done,renderToday}){
    let ativo=''
    const {userData} = useContext(UserContext);
    function checkdone(){
        if(!done){
            const body=[]
            const config = {
                headers: {
                    "Authorization": `Bearer ${userData.token}`
                }
            }
            
            const request=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,body, config)
            request.then(renderToday)
        }else{
            const body=[]
            const config = {
                headers: {
                    "Authorization": `Bearer ${userData.token}`
                }
            }
            
            const request=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,body, config)
            request.then(renderToday)
        }
    }
    return(
        <HabitContainer ativo={done} current={currentSequence} highest={highestSequence}>
            <div>
            <h1>
            {name}   
            </h1>
            <h2>
            Sequência atual: {currentSequence} 
            </h2>
            <h3>
            Seu recorde: {highestSequence}
            </h3>
            </div>
            <ion-icon  onClick={checkdone} name="checkbox"></ion-icon>
        </HabitContainer>
    )
}
const HabitContainer=styled.div`
    background-color: white;
    width: calc(100% - 36px);
    border-radius: 5px;
    margin: 22px auto 10px auto;
    color:#666666;
    display: flex;
    justify-content: space-between;
    h1{
        font-size: 21px;
        padding-top: 13px;
        padding-left: 13px;
        padding-bottom: 7px;
        
    }
    h2{
        font-size: 13px;
        padding-left: 13px;
        color: ${(props) => (props.ativo ? "green" : "#666666")};
    }
    h3{
        font-size: 13px;
        padding-left: 13px;
        padding-bottom: 7px;
        color: ${(props) => (props.current==props.highest && props.ativo ? "green" : "#666666")};
    }
    ion-icon{
       color: ${(props) => (props.ativo ? "green" : "#EBEBEB")};
       font-size: 69px;
       margin:auto 0;
    }
`