import styled from "styled-components";
import Day from './Day';

const daysOfTheWeek = [1, 2, 3, 4, 5, 6, 7];


export default function CreateNewHabit({ setCreateNewHabit }) {
    return (
        <NewHabit>
            <input placeholder='nome do hábito' />
            <Week>
                {daysOfTheWeek.map((day, index) => <Day key={index} dayId={day} />)}
            </Week>
            <ButtonsContainer>
                <CancelButton onClick={() => setCreateNewHabit(false)}>Cancelar</CancelButton>
                <SaveButton>Salvar</SaveButton>
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
    margin-top: 20px;

    input{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        font-size: 20px;
        padding-left: 11px;
        color: #7a7a7a;
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
`;
