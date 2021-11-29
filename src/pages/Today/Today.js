import styled from "styled-components";
import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";
import UserContext from "../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import React from "react";
import * as dayjs from "dayjs";
import { Checkmark } from "react-ionicons";
import {
    getTodayHabits,
    sendCheckHabit,
    sendUncheckHabit,
} from "../../service/trackit";

const TodayHabit = ({
    id,
    name,
    done,
    currentSequence,
    highestSequence,
    loadTodayHabits,
}) => {
    const { user } = useContext(UserContext);
    const [checked, setChecked] = useState(done);
    const newRecord =
        done && currentSequence === highestSequence ? true : false;
    const config = {
        headers: {
            Authorization: `Bearer ${user.data.token}`,
        },
    };

    const uncheckHabit = () => {
        setChecked(false);
        sendUncheckHabit(id, config)
            .then(() => {
                loadTodayHabits();
            })
            .catch(() => {
                setChecked(true);
                alert("Erro ao desmarcar hábito");
            });
    };

    const checkHabit = () => {
        if (checked) {
            uncheckHabit();
        } else {
            setChecked(true);
            sendCheckHabit(id, config)
                .then(() => {
                    loadTodayHabits();
                })
                .catch(() => {
                    setChecked(false);
                    alert("Erro ao marcar hábito");
                });
        }
    };

    return (
        <TodayHabitContainer>
            <HabitInfo>
                <HabitName>{name}</HabitName>
                <HabitSequence>
                    Sequência atual:{" "}
                    <Span shouldBeGreen={done}>{currentSequence} dias</Span>
                </HabitSequence>
                <HabitSequence>
                    Seu recorde:{" "}
                    <Span shouldBeGreen={newRecord}>
                        {highestSequence} dias
                    </Span>
                </HabitSequence>
            </HabitInfo>
            <HabitCheck onClick={checkHabit} checked={checked}>
                <StyledCheckmark
                    color={"#ffffff"}
                    height="60px"
                    width="60px"
                    checked={checked}
                />
            </HabitCheck>
        </TodayHabitContainer>
    );
};

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
    margin: 70px 0 70px 0;
    padding: 28px 17px 0 18px;
    display: flex;
    flex-direction: column;

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

const TodayHabitContainer = styled.div`
    width: 340px;
    height: 94px;
    background-color: #ffffff;
    border-radius: 5px;
    color: #666666;
    padding: 13px 13px 12px 15px;
    display: flex;
    flex-direction: initial;
    justify-content: space-between;
    margin: 0 auto 10px auto;
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

const Span = styled.span`
    color: ${(props) => (props.shouldBeGreen ? "#8FC549" : "#666666")};
    background-color: inherit;
`;

const HabitCheck = styled.button`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: none;
    background-color: ${(props) => (props.checked ? "#8FC549" : "#EBEBEB")};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledCheckmark = styled(Checkmark)`
    background-color: ${(props) => (props.checked ? "#8FC549" : "#EBEBEB")};
`;
