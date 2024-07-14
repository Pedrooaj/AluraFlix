import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import { GlobalStyles } from "../../Components/GlobalStyles/GlobalStyles";
import Rodape from "../../Components/Rodape";
import Container from "../../Components/Container";


const PaginaPadrao = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Rodape />
        </>

    );
}

export default PaginaPadrao;