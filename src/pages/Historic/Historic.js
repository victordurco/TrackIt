import { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import UserContext from "../../contexts/UserContext";

import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";

export default function Historic() {
    const history = useHistory();
    const { user } = useContext(UserContext);

    if (!user.data) {
        history.push("/");
    }
    return (
        <Container>
            <Header img={user.data ? user.data.image : ""} />
            <HistoricTitle>Histórico</HistoricTitle>
            <HistoricMsg>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </HistoricMsg>
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    padding: 28px 22px 0 15px;
`;

const HistoricTitle = styled.span`
    color: #126ba5;
    font-size: 23px;
    margin-bottom: 17px;
`;

const HistoricMsg = styled.p`
    font-size: 18px;
    color: #666666;
`;
