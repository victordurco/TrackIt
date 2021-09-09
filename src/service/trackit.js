import axios from "axios";

const SIGNIN_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
const SIGNUP_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';

const sendSignUp = (body) => {
    const promise = axios.post(SIGNUP_URL, body);
    return promise;
};

const sendSignIn = (body) => {
    const promise = axios.post(SIGNIN_URL, body);
    return promise;
};

export {
    sendSignIn,
    sendSignUp
};

