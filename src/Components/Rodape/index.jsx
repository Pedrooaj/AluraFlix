import styled from "styled-components";
import image from "/LogoMain.png"

const RodapeContainer = styled.footer`

    background-color: black;
    width: 100%;
    height: 125px;
    border-top: 2px solid rgba(34, 113, 209, 1);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Rodape = () => {
    return (  
        <RodapeContainer>
            <img src={image} alt="Logo" />
        </RodapeContainer>
    );
}
 
export default Rodape;