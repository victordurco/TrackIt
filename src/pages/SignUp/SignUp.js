import styled from 'styled-components';
import logo from '../../img/logo-login.png';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import { useHistory } from 'react-router';
import { sendSignUp } from '../../service/trackit';

export default function SignUp(){
    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const signUp = () =>{
        const body = {
            email,
            password,
            name,
            image
        }

        sendSignUp(body)
            .then( res => history.push("/"))
            .catch( err => alert(err.data));
    }

    return(
        <StyledDiv>
            <img src={logo} alt='track it logo'/>
            <input placeholder=' email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder=' senha' value={password} onChange={e => setPassword(e.target.value)}/>
            <input placeholder=' nome' value={name} onChange={e => setName(e.target.value)}/>
            <input placeholder=' foto' value={image} onChange={e => setImage(e.target.value)}/>
            <button onClick={signUp}>Cadastrar</button>
            <StyledLink to='/'>Já tem uma conta? Faça login!</StyledLink>
        </StyledDiv>  
        );
}

const StyledDiv = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    
    img{
        width: 180px;
        height: 178.38px;
        margin-top: 68px;
        background-color: inherit;
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
    background-color: inherit;
`;
