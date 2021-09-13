import styled from 'styled-components';
import logo from '../../img/logo-login.png';
import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { sendSignIn } from '../../service/trackit';
import { useHistory } from 'react-router'
import UserContext from '../../contexts/UserContext';
import Loading from '../../components/Shared/LoadingLogIn';



export default function SingIn() {
    let history = useHistory();
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const login = (e) => {
        e.preventDefault();
        setLoading(true);
        const body = {
            email,
            password
        }

        sendSignIn(body)
            .then(res => {
                console.log(res);
                setUser(res);
                setLoading(false);
                history.push('/hoje');
            })
            .catch(() => {
                alert('erro no login');
                setLoading(false);
            });
    };

    return (
        <StyledDiv>
            <img src={logo} />
            <Form onSubmit={login}>
                <input type="email" placeholder=' email' value={email} onChange={e => setEmail(e.target.value)} required/>
                <input type="password" placeholder=' senha' value={password} onChange={e => setPassword(e.target.value)} required/>
                {loading ?
                    <Loading />
                    :
                    <button type="submit" onClick={login}>Entrar</button>}
            </Form>
            <StyledLink to='/cadastro'>Não tem uma conta? Cadastre-se!</StyledLink>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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

const Form = styled.form`
    background-color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

