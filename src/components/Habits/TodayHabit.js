import styled from "styled-components"
export default function TodayHabit({name,currentSequence,highestSequence,id}){
    return(
        <HabitContainer>
            <div>
            <h1>
            {name}   
            </h1>
            <h2>
            Sequência atual: {currentSequence} <br/>
            Seu recorde: {highestSequence}
            </h2>
            </div>
            <ion-icon name="checkbox"></ion-icon>
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
        padding-bottom: 7px;
    }
    ion-icon{
       color:#EBEBEB; 
       font-size: 69px;
       margin:auto 0;
    }
`