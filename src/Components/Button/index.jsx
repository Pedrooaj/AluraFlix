import styled from "styled-components";

const ButtonContainer = styled.button`
    width: 160px;
    height: 50px;

    button{
        width: 100%;
        height: 100%;
        background-color: #007bff;
        color: white;
        font-size: 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover{
        background-color: #0056b3;
    }

`

const Button = ({onClick, children, type}) => {
    return (  
        <ButtonContainer>
            <button type={type} onClick={onClick}>{children}</button>
        </ButtonContainer>
    );
}
 
export default Button;