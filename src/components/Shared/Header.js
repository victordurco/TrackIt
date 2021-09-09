import styled from "styled-components";
import logo from '../../img/logo-header.png';
import perfil from '../../img/foto-perfil.png';

export default function Header(){
    return (
        <StyledDiv>
            <img src={logo} alt='track it logo' />
            <img src={perfil} alt='foto perfil' />
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    padding: 10px 10px 10px 18px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    img{
        margin: auto 0;
        background-color: inherit;
    }
`;