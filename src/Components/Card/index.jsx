import { BsPencilSquare } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import ModalComponent from "../Modal";


const CardContainer = styled.div`

    padding: 0;

    img{
        height: 80%;
        width: 100%;
        border-radius: 10px 10px 0 0;
    }

`

const RodapeCard = styled.footer`
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
    height: 20%;




    span{

        cursor: pointer;
        font-size: 28px;
        color: white;
        display: flex;
        align-items: center;
    }
`


const Card = ({ imagem }) => {

    return (  
            <CardContainer>
                <img src={imagem} alt="Image" />
                <RodapeCard>
                    <span><FaTrashAlt /> Deletar</span>
                    <ModalComponent><BsPencilSquare /> Editar</ModalComponent>
                </RodapeCard>
            </CardContainer>
    );
}

export default Card;
