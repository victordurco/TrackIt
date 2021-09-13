import Header from "../../components/Shared/Header";
import styled from "styled-components";
import Footer from "../../components/Shared/Footer";
import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { getHabits } from "../../service/trackit";
import { useState, useEffect } from "react";
import CreateNewHabit from "./CreateNewHabit";
import UserHabitsContext from '../../contexts/UserHabitsContext';
import UserHabit from "./UserHabit";

export default function Habits() {
    const { user, setTodaysProgress } = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const [createNewHabit, setCreateNewHabit] = useState(false)
    const token = user.data.token;
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const loadHabits = () => {
        getHabits(config)
            .then((response) => {
                setHabits([...response.data]);
                if(response.data.length===0)
                    setTodaysProgress(0);
            })
            .catch(() => alert('Erro ao recuperar hábitos do servidor'));
    }

    useEffect(() => loadHabits(), []);

    return (
        <div>
            <Header img={user.data.image} />
            <Body>
                <HabitsTitle>
                    Meus hábitos
                    <button onClick={() => setCreateNewHabit(true)}>+</button>
                </HabitsTitle>
                <UserHabitsContext.Provider value={{ loadHabits, setCreateNewHabit }}>
                    {createNewHabit ?
                        <CreateNewHabit />
                        :
                        <></>
                    }
                    {habits.length > 0 ?
                        habits.map((habit) => 
                        <UserHabit 
                            key={habit.id} 
                            name={habit.name} 
                            days={habit.days} 
                            id={habit.id}
                        />)
                        :
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    }
                </UserHabitsContext.Provider>
            </Body>
            <Footer />
        </div>
    );
}

const Body = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y:scroll;
    overflow-x: hidden;
    margin-bottom: 70px;
    
    p{
        margin-top: 28px;
        font-size: 18px;
        color: #666666;
        max-width: 500px;
    }
`;

const HabitsTitle = styled.div`
    display: flex;
    flex-direction: initial;
    justify-content: space-between;
    font-size: 23px;
    margin: 98px 0 20px 0;
    width: 100%;
    max-width: 500px;
    color: #126BA5;
    align-items: center;

    button{
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        font-size: 27px;
        color: #ffffff;
    }
`;

