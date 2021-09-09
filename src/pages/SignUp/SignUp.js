import styled from 'styled-components';
import logo from '../../img/logo-login.png';
import { Link } from 'react-router-dom'; 

export default function SignUp(){
    return(
        <StyledDiv>
            <img src={logo} />
            <input placeholder=' email'/>
            <input placeholder=' senha'/>
            <input placeholder=' nome'/>
            <input placeholder=' foto'/>
            <button>Cadastrar</button>
            <StyledLink to='/'>Já tem uma conta? Faça login!</StyledLink>
        </StyledDiv>  
        );
}

const StyledDiv = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    
    img{
        width: 180px;
        height: 178.38px;
        margin-top: 68px;
    }

    input{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        margin-bottom: 6px;
        box-sizing: border-box;
        font-family:  'Lexend Deca', sans-serif;
    }

    button{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        color: #ffffff;
        font-family:  'Lexend Deca', sans-serif;
        margin-bottom: 25px;
    }

`;

const StyledLink = styled(Link)`
    font-size: 14px;
        color: #52B6FF;
        text-decoration: none;
`;
