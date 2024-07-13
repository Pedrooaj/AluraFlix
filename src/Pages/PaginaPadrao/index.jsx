import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import { GlobalStyles } from "../../Components/GlobalStyles/GlobalStyles";
import Rodape from "../../Components/Rodape";


const PaginaPadrao = () => {
    return (  
        <>
        <GlobalStyles />    
        <Header />
        <Outlet />
        <Rodape />
        </>

    );
}
 
export default PaginaPadrao;