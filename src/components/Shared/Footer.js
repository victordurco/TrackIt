import styled from "styled-components";
import { Link } from "react-router-dom";
import progress from '../../img/progress-bar.png';


export default function Footer(){
    return(
        <StyledDiv>
            <StyledLink to='/habitos'>Hábitos</StyledLink>
            <StyledLink to='/'>Histórico</StyledLink>
            <img src={progress} alt='progress-bar' />
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 31px 0 36px;

    img{
        background-color: inherit;
        position: fixed;
        bottom: 10px;
        left: calc((100vw / 2) - 48px);
        border-radius: 45px;
    }
`;

const StyledLink = styled(Link)`
    background-color: inherit;
    margin:  auto 0;
    text-decoration: none;
    color: #52B6FF;
`;