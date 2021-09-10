import Header from "../../components/Shared/Header";
import styled from "styled-components";
import Footer from "../../components/Shared/Footer";
import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { getHabits } from "../../service/trackit";
import { useState, useEffect } from "react";
import CreateNewHabit from "./CreateNewHabit";

export default function Habits() {
    const { user } = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const [createNewHabit, setCreateNewHabit] = useState(true)
    const token = user.data.token;

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        getHabits(config)
        .then((response) => {
            setHabits(response.data);
        })
        .catch(() => alert('Erro ao recuperar hábitos do servidor'));

    }, []);


    return (
        <div>
            <Header img={user.data.image} />
            <Body>
                <HabitsTitle>
                    Meus hábitos
                    <button onClick={()=>setCreateNewHabit(true)}>+</button>
                </HabitsTitle>
                {createNewHabit?
                    <CreateNewHabit setCreateNewHabit={setCreateNewHabit}/>
                    :
                    <></>
                }
                {habits.length > 0?
                    <p>OIE EU TENHO HABITOS</p>
                    :
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>  
                }
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
    margin-top: 98px;
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

