import styled from 'styled-components';
import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function Header(){
    const {userData} = useContext(UserContext);
    
    return(
        <Sup>
        
            <p>TrackIt</p> 
            <img src={userData.image}/>
        </Sup>
    )
}
const Sup = styled.div`
    width:100%;
    height:70px;
    background-color: #126BA5;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:40px;
    color:#ffffff;
    font-family: 'Playball', cursive;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    img{
        width:51px;
        height:51px;
        margin-right:18px;
        border-radius: 50%;
    }
    p{
        margin-left:18px;
    }
`;
