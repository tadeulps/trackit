import Header from "./Header"
import Menu from "./Menu"
import styled from 'styled-components';
import NewHabit from "./NewHabit"
import NoHabit from "./NoHabit"
import { useState,useContext,useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import axios from "axios"
import Habits from "./Habits"
export default function MyHabits(){
    const {userData} = useContext(UserContext);
    const [controller,setController]=useState(false)
    const [habitList, setHabitList] = useState([]);
    function creating(){
        setController(true)
    }
    console.log(habitList)
    function renderMyHabits(){
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,config);
        requisicao.then((resposta)=>setHabitList(resposta.data))
    }
    useEffect(renderMyHabits, []);
    console.log(habitList)
    return(
        <>  
            <Header/>
            
            <Title>
             <div>
              <p> Meus hábitos</p>
              <button onClick={creating}> + </button>   
             </div>
             </Title>
             { controller?<NewHabit controller={controller} setController={setController} renderMyHabits={renderMyHabits}/>:''}

             {habitList.map((e)=>{
                 return (<Habits name={e.name} days={e.days} id={e.id} renderMyHabits={renderMyHabits}/>)
             })}

            {habitList.length>0? '':<NoHabit/>}
             
            <Menu/>
            
        </>
    )
}
const Title = styled.div`
    margin-top: 98px;
    font-family: 'Lexend Deca', sans-serif;
    margin-left: 18px;
    margin-right: 18px;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    p{
        color: #126BA5;
        font-size: 23px;
    }
    button{
        width: 40px;
        height: 35px;
        font-size: 27px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border-style: none;
        color: #ffffff;
    }
`

