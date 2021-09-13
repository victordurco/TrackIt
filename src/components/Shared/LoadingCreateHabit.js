import styled from "styled-components";
import Loader from "react-loader-spinner";

export default function Loading(){
    return(
        <StyledLoader type="ThreeDots" color="#FFFFFF" height={80} width={80} />
    );
}

const StyledLoader = styled(Loader)`
        width: 84px;
        height: 35px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
`;
