import styled from 'styled-components';
import ButtonsOnHabits from "./ButtonsOnHabits"
export default function Habits({name,days}){
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    console.log(days)
    return (
        <HabitBox>
            <div>
            <p>{name}</p>
            {weekdays.map((e,i)=><ButtonsOnHabits day={e} id={i} markedDays={days}/>)}
            </div>
        </HabitBox>
    )
}

const HabitBox=styled.div`
    background-color: white;
    width: calc(100% - 36px);
    border-radius: 5px;
    margin: 22px auto 10px auto;
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
