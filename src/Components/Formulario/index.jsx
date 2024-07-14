import styled from "styled-components";
import InputComponent from "../Input";
import Button from "../Button";
import Seletor from "../Seletor";
import TextArea from "../TextArea";


const FormularioContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    form{
        padding: 25px;
        display: flex;
        justify-content: center;   
        align-items: center;
        flex-direction: column;
        gap: 40px;
        width: 50%;
    }
`


const Formulario = () => {
    return (  
        <FormularioContainer>
            <h1>Adicionar Novo Filme</h1>
            <form>
                <InputComponent label="Titulo" placeholder="Insira o Titulo de Seu Filme" required />
                <Seletor lista={[1,2,3,4,5]} label="Categoria" />
                <InputComponent label="Imagem" placeholder="Insira o Link da Imagem" required />
                <TextArea placeholder="Digite sua Descrição aqui" label="Descrição" />
                <Button type="submit">Adicionar</Button>
            </form>
        </FormularioContainer>
    );
}
 
export default Formulario;