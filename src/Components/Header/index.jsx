import styled from "styled-components";
import Logo from "/LogoMain.png"
import Nav from "./Nav";


const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    width: 100%;
    height: 125px;  
    background-color: rgba(38, 38, 38, 1);

    img{
        margin-left: 45px;
    }
    nav{
        margin-right: 45px;
    
    }
`



const Header = () => {
    return (  
    <HeaderContainer>
        <img src={Logo} alt="Logo" />
        <Nav />
    </HeaderContainer>
    );
}
 
export default Header;