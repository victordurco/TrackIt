import styled from "styled-components";
import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";
import UserContext from "../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import React from 'react';
import * as dayjs from 'dayjs';
import { Checkmark } from "react-ionicons";
import { getTodayHabits } from "../../service/trackit";


const TodayHabit = () => {
    return (
        <TodayHabitContainer>
            <HabitInfo>
                <HabitName>Ler 1 capítulo de livro</HabitName>
                <HabitSequence>Sequência atual: 3 dias</HabitSequence>
                <HabitSequence>Seu recorde: 5 dias</HabitSequence>
            </HabitInfo>
            <HabitCheck>
                <StyledCheckmark
                    color={'#ffffff'}
                    height="60px"
                    width="60px"
                />
            </HabitCheck>
        </TodayHabitContainer>
    );
}

export default function Today() {
    require('dayjs/locale/pt-br');
    let date = dayjs().locale('pt-br').format('dddd, DD/MM');

    const { user } = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState([]);
    const token = user.data.token;
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }


    const loadTodayHabits = () => {
        getTodayHabits(config)
            .then((response) => {
                console.log(response);
                setTodayHabits([...response.data]);
                
            })
            .catch(() => alert('Erro ao recuperar hábitos do servidor'));
    }

    useEffect(() => loadTodayHabits(), []);

    return (
        <Container>
            <Header img={user.data.image} />
            <TodayTitle>{date}</TodayTitle>
            <TodaySubtitle>Nenhum hábito concluído ainda</TodaySubtitle>
            <TodayHabit />
            {console.log(todayHabits)}
            <Footer />
        </Container>
    );
}


const Container = styled.div`
    margin-top: 70px;
    padding: 28px 17px 0 18px;
    display: flex;
    flex-direction: column;
`;

const TodayTitle = styled.span`
    font-size: 23px;
    color: #126BA5;
    margin-bottom: 5px;
`;

const TodaySubtitle = styled.span`
    font-size: 18px;
    color: #BABABA;
    margin-bottom: 28px;
`;

const TodayHabitContainer = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    color:#666666;
    padding: 13px 13px 12px 15px;
    display: flex;
    flex-direction: initial;
    justify-content: space-between;
`;

const HabitInfo = styled.div`
    display: flex;
    flex-direction: column;
    background-color: inherit;
`;

const HabitName = styled.span`
    font-size: 20px;
    margin-bottom: 7px;
    background-color: inherit;
`;

const HabitSequence = styled.span`
    font-size: 13px;
    background-color: inherit;
    margin-bottom: 4px;
`;

const HabitCheck = styled.button`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: none;
    background-color: #EBEBEB;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledCheckmark = styled(Checkmark)`
    background-color: #EBEBEB;
`;