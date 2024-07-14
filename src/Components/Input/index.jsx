import styled from "styled-components";

const InputContainer = styled.div`
    width: 80%;
    height: 45px;
    margin: 5px;
    input{
        width: 100%;
        height: 100%;
        border: 2px solid rgba(107, 209, 255, 1);
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
    }
    label{
        font-size: 20px;
        padding: 5px;
    }
`

const InputComponent = ({ placeholder, type, label, required = false }) => {
    return (
        <InputContainer>
        <label>{label}</label>
            <input placeholder={placeholder} type={type} required={required} />
        </InputContainer>

    );
}

export default InputComponent;