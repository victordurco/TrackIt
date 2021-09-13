import styled from "styled-components";
import Loader from "react-loader-spinner";

export default function Loading(){
    return(
        <StyledLoader type="ThreeDots" color="#FFFFFF" height={80} width={80} />
    );
}

const StyledLoader = styled(Loader)`
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        color: #ffffff;
        margin-bottom: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
`;