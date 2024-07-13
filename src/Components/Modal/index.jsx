import { Modal } from "flowbite-react";
import { useState } from "react";
import styled from "styled-components";
import InputComponent from "../Input";
import Seletor from "../Seletor";
import TextArea from "../TextArea";
import Button from "../Button";


const ModalContainer = styled.div`
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;

`

const ModalContain = styled.div`
    color: black;
    background-color: gray;
    h1{
        color: black;
    }
`

function ModalComponent({ children }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <span onClick={() => setOpenModal(true)}>{children}</span>
            <Modal show={openModal} onClose={() => setOpenModal(
                false)}>
                <ModalContain>
                    <Modal.Header><h1>Editar Card</h1></Modal.Header>
                    <ModalContainer>
                        <InputComponent label="Titulo" placeholder="Digite o novo nome" type="text" />
                        <Seletor lista={[1, 2, 3, 4, 5]} label="Categoria" />
                        <InputComponent label="Imagem" placeholder="Digite a URL da imagem" type="text" />
                        <InputComponent label="Video" placeholder="Link de Preferencia do Youtube" type="text" />
                        <TextArea label="Descrição" placeholder="Digite a nova descrição" />
                        <Button onClick={() => console.log("Olá")} >Salvar</Button>
                    </ModalContainer>
                </ModalContain>
            </Modal>
        </>
    );
}

export default ModalComponent;