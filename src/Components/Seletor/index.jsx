import styled from "styled-components";

const SeletorContainer = styled.div`
    width: 80%;
    height: 45px;
    color: black;
    margin: 5px;
    select{
        border: 2px solid rgba(107, 209, 255, 1);
        border-radius: 5px;
        padding-left: 5px;
        font-size: 20px;
       width: 100%;
       height: 100%;
    }
    label{

        font-size: 20px;
        padding: 5px;
    }
`

const Seletor = ({ lista, label }) => {
    return (
        <SeletorContainer>
            <label>{label}</label>
            <select>
                <option value="1"></option>
                {lista.map((item, index) => {
                    return <option key={index} value={index}>{item}</option>
                })}
            </select>
        </SeletorContainer>
    );
}

export default Seletor;