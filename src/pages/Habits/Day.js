import { useState } from "react/cjs/react.development";
import styled from "styled-components";



export default function Day({ dayId, week,setDaysOfTheWeek, editable, loading }){
    
    const [selected, setSelected] = useState(week[dayId].selected);
    let dayName = '';

    switch (dayId) {
        case 0:
            dayName = 'D';
            break;
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
        default:
            break;
    }

    const selectDay = (id) =>{
        const newWeek = [...week];
        newWeek[id].selected = !(newWeek[id].selected);
        setDaysOfTheWeek(newWeek);
        setSelected(!selected);
    }

    return (
        <>
            {editable?
                <DayOfTheWeek 
                    onClick={()=>selectDay(dayId)} 
                    selected={selected}
                    setDaysOfTheWeek={setDaysOfTheWeek}
                    loading={loading}
                >        
                        {dayName}
                   
                </DayOfTheWeek>
                :
                <DayOfTheWeek  
                    selected={selected}
                    loading={loading}
                >
                    {dayName}
                </DayOfTheWeek>
            }
        </>
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
    pointer-events: ${props => props.loading? 'none':'initial'};
`;