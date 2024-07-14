import styled from "styled-components";
import Logo from "/LogoMain.png"
import Nav from "./Nav";


const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    flex-wrap: wrap;
    width: 100%;
    height: 125px;  
    background-color: rgba(38, 38, 38, 1);
   

    @media (max-width: 768px) {
        justify-content: center;


    }

    img{
        margin-left: 45px;
    }
    nav{
        margin-right: 45px;
    }

    @media (max-width: 768px) {
        gap: 20px;
        padding-bottom: 80px;
        img{
            margin-left: 0;
        }
        nav{
            margin-right: 0;
        
    }
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