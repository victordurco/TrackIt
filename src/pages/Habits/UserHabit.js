import styled from "styled-components";
import Day from "./Day";
import { TrashOutline } from 'react-ionicons'




export default function UserHabit({ name, days }) {
    const daysOfTheWeek = [
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
        { id: 5, selected: false },
        { id: 6, selected: false },
        { id: 7, selected: false }];

    daysOfTheWeek.forEach(day => {
        if (days.includes(day.id))
            day.selected = true;
    })

    return (
        <Habit>
            <span>{name}</span>
            <Week>
                {daysOfTheWeek.map((day, index) => <Day key={index} dayId={day.id} week={daysOfTheWeek} editable={false} />)}
                <Trash
                    color={'#00000'}
                    height="18px"
                    width="16px"
                />
            </Week>
        </Habit>
    );
}

const Habit = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 340px;
    height: 91px ; 
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    padding: 13px 0 0 15px;

    span{
        font-size: 20px;
        color:#666666;
        background-color: inherit;
    }
`;

const Week = styled.div`
    display: flex;
    flex-direction: initial;
    background-color: inherit;
    margin-top: 10px;
`;

const Trash = styled(TrashOutline)`
    position: absolute;
    top: 11px;
    right: 10px;
`;