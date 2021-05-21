import styled from 'styled-components';
export default function NoHabit(){
    return(
        <NoHabits>
             <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </NoHabits>
    )
}
const NoHabits=styled.div`
    margin-left: 18px;
    font-family: 'Lexend Deca', sans-serif;
    color: #666666;
    font-size: 18px;
    margin-top: 20px;
`
