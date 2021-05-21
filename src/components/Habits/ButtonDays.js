import styled from "styled-components"
import { useState } from 'react';
export default function ButtonDays({day,id,selectedDays,setSelectedDays}){
    const [enabled,setEnabled]=useState(false)
    function selected(){
        if(enabled!=true){
            setEnabled(true)
            setSelectedDays([...selectedDays,id])
        }else{
            setEnabled(false)
            setSelectedDays(selectedDays.filter((e)=>e!==id))
        }
    }
    return(
        <Botao habilitado={enabled} onClick={selected}>{day}</Botao>
    )
}
const Botao=styled.button`
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-right: 3px;
        font-size: 20px;
        background-color: ${props=>props.habilitado?'#DBDBDB':'white'};
        color: ${props=>props.habilitado?'white':'#DBDBDB'};
`
