import axios from "axios";

const SIGNIN_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
const SIGNUP_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
const HABITS_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

const sendSignUp = (body) => {
    const promise = axios.post(SIGNUP_URL, body);
    return promise;
};

const sendSignIn = (body) => {
    const promise = axios.post(SIGNIN_URL, body);
    return promise;
};

const getHabits = (config) => {
    const promise = axios.get(HABITS_URL, config);
    return promise;
};

const sendHabit = (body, config) => {
    const promise = axios.post(HABITS_URL, body, config);
    return promise;
};

const sendDeleteHabit = (id, config) => {
    const promise = axios.delete(`${HABITS_URL}/${id}`,config);
    return promise;
}

const getTodayHabits = (config) => {
    const promise = axios.get(`${HABITS_URL}/today`, config);
    return promise;
}

const sendCheckHabit = (id, config) => {
    const promise = axios.post(`${HABITS_URL}/${id}/check`, '', config);
    return promise;
}

const sendUncheckHabit = (id, config) => {
    const promise = axios. post(`${HABITS_URL}/${id}/uncheck`, '', config);
    return promise;
}

export {
    sendSignIn,
    sendSignUp,
    getHabits,
    sendHabit,
    sendDeleteHabit,
    getTodayHabits,
    sendCheckHabit,
    sendUncheckHabit
};

