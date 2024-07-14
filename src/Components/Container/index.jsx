import styled from "styled-components";

const ContainerDiv = styled.div`
    width: 100%;
    min-height: 70vh;

`

const Container = ({children}) => {
    return (  
        <ContainerDiv>
            {children}
        </ContainerDiv>

    );
}
 
export default Container;