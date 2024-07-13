import styled from "styled-components";

const TextAreaContainer = styled.div`
    width: 80%;
    height: 80px;

    textarea{
        height: 100%;
        width: 100%;
        border: 2px solid rgba(107, 209, 255, 1);
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
        resize: none;
    }

    label{
        font-size: 20px;
        padding: 5px;
    }
`

const TextArea = ({ label, placeholder }) => {
    return (
        <TextAreaContainer>
            <label>{label}</label>
            <textarea  placeholder={placeholder} />
        </TextAreaContainer>
    );
}

export default TextArea;