import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export default function Footer() {
    return (
        <StyledDiv>
            <StyledLink to='/habitos'>Hábitos</StyledLink>
            <CentralOption >
                <CircularProgressbar
                            value={50}
                            text={`Hoje`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            textSize: '18px',
                            trailColor: "transparent",
                            })}
                        />
            </CentralOption>
            <StyledLink to='/historico'>Histórico</StyledLink>  
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
    z-index: 1;

`;

const CentralOption = styled.div`
    height: 91px;
    width: 91px;
    position: fixed;
    bottom: 10px;
    left: calc((100vw / 2) - 48px);
    border-radius: 45px;
`;

const StyledLink = styled(Link)`
    background-color: inherit;
    margin:  auto 0;
    text-decoration: none;
    color: #52B6FF;
    border-radius: 50px;
`;