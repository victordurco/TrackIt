import { useState } from "react/cjs/react.development";
import styled from "styled-components";


export default function Day({ dayId }){
    const [selected, setSelected] = useState(false);
    let dayName = '';

    switch (dayId) {
        case 1:
            dayName = 'S';
            break;
        case 2:
            dayName = 'T';
            break;
        case 3:
            dayName = 'Q';
            break;
        case 4:
            dayName = 'Q';
            break;
        case 5:
            dayName = 'S';
            break;
        case 6:
            dayName = 'S';
            break;
        case 7:
            dayName = 'D';
            break;
        default:
            break;
    }

    return (
        <DayOfTheWeek onClick={()=>setSelected(!selected)} selected={selected}>{dayName}</DayOfTheWeek>
    );
}


const DayOfTheWeek = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    border: 1px solid #D4D4D4;
    background-color: ${ props => props.selected? '#CFCFCF ': 'inherit'};
    color: ${ props => props.selected? "#FFFFFF": "#DBDBDB"};
`;