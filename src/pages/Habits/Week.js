import styled from "styled-components";


export default function Week(editable, week) {
    week = (typeof week === undefined ?
        [
            { id: 1, selected: false },
            { id: 2, selected: false },
            { id: 3, selected: false },
            { id: 4, selected: false },
            { id: 5, selected: false },
            { id: 6, selected: false },
            { id: 7, selected: false }
        ]
        :
        week);
    return (
        <Week>
            {week.map((day, index) => <Day key={index} dayId={day.id} week={daysOfTheWeek} editable={editable} />)}
        </Week>
    );
}


const Week = styled.div`
    display: flex;
    flex-direction: initial;
    background-color: inherit;
    margin-bottom: 20px;
`;
