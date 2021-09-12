import styled from "styled-components";
import Header from "../../components/Shared/Header";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import Footer from "../../components/Shared/Footer";


export default function Historic(){
    const { user } = useContext(UserContext);

    return(
        <Container>
            <Header img={user.data.image} />
            <HistoricTitle>Histórico</HistoricTitle>
            <HistoricMsg>Em breve você poderá ver o histórico dos seus hábitos aqui!</HistoricMsg>
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
    color: #126BA5;
    font-size: 23px;
    margin-bottom: 17px;
`;

const HistoricMsg = styled.p`
    font-size: 18px;
    color: #666666;
`;