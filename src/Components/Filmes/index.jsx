import styled from "styled-components";
import Card from "../Card";

const FilmesContainer = styled.div`
    background-color: rgba(38, 38, 38, 1);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 0;
`

const Lista = styled.ul`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    gap: 4%;
    justify-content: center;

    @media (max-width: 850px) {
        grid-template-columns: 45% 45%;
    
    }
`

const GrupoFilmes = styled.div`
    position: relative;
    margin-top: 10%;
    width: 90%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;


    @media (max-width: 850px) {
        margin-top: 20%;
        margin-bottom: 20%;
    }
`

const Titulo = styled.h1`
        color: white;
        left: 1%;
        background-color: rgba(107, 209, 255, 1);
        padding: 5px 30px 5px 30px;
        border-radius: 10px;
        top: -35%;
        position: absolute;

        @media (max-width: 850px) {
            left: auto;
    }
`

const Filmes = () => {
    return (
        <FilmesContainer>
            <GrupoFilmes>
                <Titulo>Categoria</Titulo>
                <Lista>
                    <Card imagem="/react.png" />
                    <Card imagem="/react.png" />
                    <Card imagem="/react.png" />
                </Lista>
            </GrupoFilmes>
            <GrupoFilmes>
                <Titulo>Categoria</Titulo>
                <Lista>
                    <Card imagem="/react.png" />
                    <Card imagem="/react.png" />
                    <Card imagem="/react.png" />

                </Lista>
            </GrupoFilmes>
            <GrupoFilmes>
                <Titulo>Categoria</Titulo>
                <Lista>
                    <Card imagem="/react.png" />
                    <Card imagem="/react.png" />
                    <Card imagem="/react.png" />

                </Lista>
            </GrupoFilmes>
        </FilmesContainer>

    );
}

export default Filmes;