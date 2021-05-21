import Header from "./Header"
import Menu from "./Menu"
import styled from 'styled-components';
import NewHabit from "./NewHabit"
import NoHabit from "./NoHabit"
import { useState } from 'react';
export default function MyHabits(){
    const [controller,setController]=useState(false)
    function creating(){
        setController(true)
    }
    return(
        <>  
            <Header/>
            
            <Title>
             <div>
              <p> Meus hábitos</p>
              <button onClick={creating}> + </button>   
             </div>
             </Title>
             { controller?<NewHabit controller={controller} setController={setController}/>:''}
             

             <NoHabit/>
             
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

