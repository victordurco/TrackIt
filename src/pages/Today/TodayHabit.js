import { React, useContext, useState } from "react";
import styled from "styled-components";

import { Checkmark } from "react-ionicons";
import { sendCheckHabit, sendUncheckHabit } from "../../service/trackit";
import UserContext from "../../contexts/UserContext";

export default function TodayHabit({
    id,
    name,
    done,
    currentSequence,
    highestSequence,
    loadTodayHabits,
}) {
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
}

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
    cursor: pointer;
`;

const StyledCheckmark = styled(Checkmark)`
    background-color: ${(props) => (props.checked ? "#8FC549" : "#EBEBEB")};
`;
