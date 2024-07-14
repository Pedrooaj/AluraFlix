import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavContainer = styled.nav`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
`

const Lista = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    width: 100%;
    list-style: none;



    .link{
        font-family: sans-serif;
        font-weight: bold;
        font-size: 18px;
        text-decoration: none;
        color: blue;
        padding: 20px;
        background-color: transparent;
        border: 1px solid red;
        border-radius: 10px;
        transition: 0.5s;
    }

    .linkA{
        background-color: black;
        color: white;
    }
`

const Nav = () => {
    const location = useLocation()
    return (
        <NavContainer>
            <Lista>
                <li>
                    <Link className={location.pathname == "/" ? "link linkA" : 'link'} to="/">Home</Link>
                </li>
                <li>
                    <Link className={location.pathname == "/Novovideo" ? " link linkA" : 'link'} to="/Novovideo">Novo Vídeo</Link>
                </li>
            </Lista>
        </NavContainer>
    );
}

export default Nav;