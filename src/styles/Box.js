import styled from 'styled-components';


const Box=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:32px;

    input{
        width:303px;
        height:45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size:20px;
        padding-left:10px;
        margin-bottom:6px;
        
        
    }
    input::placeholder{
        color: #DBDBDB;

    }
    button{
        width:315px;
        height:45px;
        background: #52B6FF;
        font-size:21px;
        color:#ffffff;
        border-radius: 5px;
        border:none;
    }
    p{
        font-size:14px;
        color:#52B6FF;
        text-decoration: underline #52B6FF;
        margin-top:18px;
    }
`;
export default Box;
