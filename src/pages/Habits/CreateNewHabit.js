import styled from "styled-components";
import Day from './Day';
import UserContext from "../../contexts/UserContext";
import UserHabitsContext from '../../contexts/UserHabitsContext';
import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { sendHabit } from "../../service/trackit";
import Loading from "../../components/Shared/LoadingCreateHabit";


export default function CreateNewHabit() {
    const { loadHabits, setCreateNewHabit } = useContext(UserHabitsContext);
    const { user } = useContext(UserContext);
    const [habitName, setHabitName] = useState('');
    const [loading, setLoading] = useState(false);
    const [daysOfTheWeek, setDaysOfTheWeek] = useState([
        { id: 0, selected: false },
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
        { id: 5, selected: false },
        { id: 6, selected: false },
    ]);



    const createDaysArray = () => {
        const days = [];
        daysOfTheWeek.forEach(day => {
            if (day.selected)
                days.push(day.id);
        });
        return days;
    }

    const resetDaysOfTheWeek = () => {
        setDaysOfTheWeek([
            { id: 0, selected: false },
            { id: 1, selected: false },
            { id: 2, selected: false },
            { id: 3, selected: false },
            { id: 4, selected: false },
            { id: 5, selected: false },
            { id: 6, selected: false },
        ]);
    }

    const saveHabit = () => {
        setLoading(true);
        const days = createDaysArray();
        const body = {
            name: habitName,
            days: days
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${user.data.token}`
            }
        }
        sendHabit(body, config)
            .then(() => {
                setLoading(false);
                resetDaysOfTheWeek();
                setCreateNewHabit(false);
                loadHabits();
            })
            .catch(() => {
                setLoading(false);
                alert('Erro ao cadastrar hábito')
            });

    }

    return (
        <NewHabit loading={loading}>
            <input
                placeholder='nome do hábito'
                value={habitName}
                onChange={e => setHabitName(e.target.value)}
            />
            <Week>
                {daysOfTheWeek.map((day, index) =>
                    <Day
                        key={index}
                        dayId={day.id}
                        week={daysOfTheWeek}
                        setDaysOfTheWeek={setDaysOfTheWeek}
                        editable={true}
                        loading={loading}
                    />)}
            </Week>
            <ButtonsContainer>
                <CancelButton onClick={() => setCreateNewHabit(false)} loading={loading}>Cancelar</CancelButton>
                {loading ?
                    <Loading />
                    :
                    <SaveButton onClick={saveHabit}>Salvar</SaveButton>
                }
            </ButtonsContainer>
        </NewHabit>
    );
}

const NewHabit = styled.div`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px 16px 15px 13px;
    margin-bottom: 20px ;

    input{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        font-size: 20px;
        padding-left: 11px;
        color: #7a7a7a;
        pointer-events: ${props => props.loading ? 'none' : 'initial'};
    }

    input::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: initial;
    background-color: inherit;
`;

const CancelButton = styled.button`
    width: 84px;
    height: 35px;
    background-color: inherit;
    color: #52B6FF;
    font-size: 16px;
    margin-left: 148px;
    margin-right: 8px;
    border: none;
    pointer-events: ${props => props.loading ? 'none' : 'initial'};
`;

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    color: #FFFFFF;
    border-radius: 5px;
    font-size: 16px;
    border:none
`;

const Week = styled.div`
    display: flex;
    flex-direction: initial;
    background-color: inherit;
    margin-bottom: 20px;
`;
