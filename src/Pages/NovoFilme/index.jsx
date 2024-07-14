import styled from "styled-components";
import Formulario from "../../Components/Formulario";

const NovoVideoContainer = styled.div`
    width: 100%;
    
`

const NovoVideo = () => {
    return (  
        <NovoVideoContainer>
            <Formulario />
        </NovoVideoContainer>
    );
}
 
export default NovoVideo;