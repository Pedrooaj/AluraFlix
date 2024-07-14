import { useContext } from "react";
import { MovieContext } from "../../Contexts/MovieContext";
import styled from "styled-components";
import image from "/react.png"

const BannerContainer = styled.div`
height: 600px;
width: 100%;
position: relative;
display: flex;

@media (max-width: 768px) {
    display: none;
}

iframe{
    position: absolute;
    right: 5%;
    top: 30%;
    z-index: 1;
    border: 2px solid rgba(107, 209, 255, 1);
    border-radius: 5px;
}

img{
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.5;

}
`

const Title = styled.div`
    margin-left: 5%;
    top: 30%;
    position: absolute;
    z-index: 1;
    width: 40%;
    color: white;

    h2{
        font-size: 40px;
    }

    h1{
        font-family: "Roboto", sans-serif;
        font-weight: 800;
        font-size: 35px;

        letter-spacing: 2px;
        background-color: rgba(107, 209, 255, 1);
        width: 300px;
        height: 90px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Banner = () => {
    const { movies } = useContext(MovieContext);

    // movies ? movies[0].imagem : null
    return (
        <BannerContainer>
            <Title>
                <h1>Categoria</h1>
                <h2>Titulo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officiis, pariatur cum odio laborum excepturi magnam quisquam quidem aperiam voluptatem numquam repudiandae sit molestias mollitia minima, recusandae obcaecati suscipit aliquid?</p>
            </Title>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KjvmTFiZzYI?si=T1kOF3yN9RzuV76l" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <img src={image} alt="Banner" />
        </BannerContainer>
    );
}

export default Banner;