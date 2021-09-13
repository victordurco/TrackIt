import styled from "styled-components";
import Day from "./Day";
import { TrashOutline } from 'react-ionicons';
import { sendDeleteHabit } from '../../service/trackit';
import { useContext } from "react";
import UserHabitsContext from "../../contexts/UserHabitsContext";
import UserContext from "../../contexts/UserContext";
import { useState } from "react/cjs/react.development";
import Loading from "../../components/Shared/LoadingLogIn";
import Swal from 'sweetalert2';



export default function UserHabit({ name, days, id }) {
    const { loadHabits } = useContext(UserHabitsContext);
    const { user } = useContext(UserContext);

    const [daysOfTheWeek, setDaysOfTheWeek] = useState([
        { id: 0, selected: false },
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
        { id: 5, selected: false },
        { id: 6, selected: false },
    ]);

    daysOfTheWeek.forEach(day => {
        if (days.includes(day.id))
            day.selected = true;
    })

    const deleteHabit = () => {
        Swal.fire({
            title: 'Tem certeza?',
            text: `deletar hábito: ${name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar'
        }).then((result) => {
            if (result.isConfirmed) {
                const config = {
                    headers: {
                        "Authorization": `Bearer ${user.data.token}`
                    }
                }

                sendDeleteHabit(id, config)
                    .then(loadHabits)
                    .catch(() => alert('Erro ao deleter habito'));
            }
        })




    }


    return (
        <Habit>
            <span>{name}</span>
            <Week>
                {daysOfTheWeek.map((day, index) =>
                    <Day
                        key={index}
                        dayId={day.id}
                        week={daysOfTheWeek}
                        setDaysOfTheWeek={setDaysOfTheWeek}
                        editable={false}
                        loading={Loading ? 1 : 0}
                    />)
                }
                <Trash
                    color={'#00000'}
                    height="18px"
                    width="16px"
                    onClick={deleteHabit}
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