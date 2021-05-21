import styled from 'styled-components'
export default function ButtonsOnHabits({day,id,markedDays}){
    
    return(
        <>
        {markedDays.includes(id)?<SelectedButton>{day}</SelectedButton>:<Botao>{day}</Botao>}
        </>
    )
}

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
const SelectedButton=styled.button`
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-right: 3px;
        font-size: 20px;
        background-color:#DBDBDB;
        color: white;
`
