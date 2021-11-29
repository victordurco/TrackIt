/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";
import UserContext from "../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import React from "react";
import * as dayjs from "dayjs";
import { getTodayHabits } from "../../service/trackit";
import TodayHabit from "./TodayHabit";

export default function Today() {
    //dayjs variables
    require("dayjs/locale/pt-br");
    let date = dayjs().locale("pt-br").format("dddd, DD/MM");

    //hooks
    const { user, setTodaysProgress } = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState([]);

    //completed habits count
    let completedHabits = 0;
    todayHabits.forEach((habit) => {
        if (habit.done) completedHabits++;
    });
    let percentageOfCompletedHabits = Math.round(
        (completedHabits * 100) / todayHabits.length
    ).toFixed(0);

    //user data
    const token = user.data.token;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const loadTodayHabits = () => {
        getTodayHabits(config)
            .then((response) => {
                setTodayHabits([...response.data]);
                let newCompletedHabits = 0;
                response.data.forEach((habit) => {
                    if (habit.done) newCompletedHabits++;
                });
                let newPercentageOfCompletedHabits = Math.round(
                    (newCompletedHabits * 100) / response.data.length
                ).toFixed(0);
                setTodaysProgress(
                    response.data.length > 0
                        ? newPercentageOfCompletedHabits
                        : 0
                );
            })
            .catch(() => alert("Erro ao recuperar hábitos do servidor"));
    };

    useEffect(() => loadTodayHabits(), []);

    return (
        <Container>
            <Header img={user.data.image} />
            <TodayTitle>{date}</TodayTitle>
            {completedHabits > 0 ? (
                <CompletedSubtitle>
                    {percentageOfCompletedHabits}% dos hábitos concluídos
                </CompletedSubtitle>
            ) : (
                <NoneSubtitle>Nenhum hábito concluído ainda</NoneSubtitle>
            )}
            {todayHabits.length > 0 ? (
                todayHabits.map((habit, index) => (
                    <TodayHabit
                        key={index}
                        id={habit.id}
                        name={habit.name}
                        done={habit.done}
                        currentSequence={habit.currentSequence}
                        highestSequence={habit.highestSequence}
                        loadTodayHabits={loadTodayHabits}
                    />
                ))
            ) : (
                <p>Você não tem nenhum hábito cadastrado para hoje</p>
            )}
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    margin: 70px 0 70px 0;
    padding: 28px 17px 0 18px;
    display: flex;
    flex-direction: column;
    background-color: #e5e5e5;
    p {
        margin-top: 28px;
        font-size: 18px;
        color: #666666;
        max-width: 500px;
    }
`;

const TodayTitle = styled.span`
    font-size: 23px;
    color: #126ba5;
    margin-bottom: 5px;
`;

const NoneSubtitle = styled.span`
    font-size: 18px;
    color: #bababa;
    margin-bottom: 28px;
`;

const CompletedSubtitle = styled.span`
    font-size: 18px;
    color: #8fc549;
    margin-bottom: 28px;
`;
