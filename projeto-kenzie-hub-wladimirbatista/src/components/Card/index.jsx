import { Container } from "./styles";
import { useState } from "react";
import ModalAtualizar from '../Modal_Atualizar'

const Card = ({ id, title, status, setNewState, newState }) => {

  const [isModalOpenAtualizar, setIsModalOpenAtualizar] = useState(false)

  const showModalAtualizar = () => {
    setIsModalOpenAtualizar(true)
  }

  return(
    <>
      <ModalAtualizar 
        id={id} 
        title={title}
        newState={newState}
        setNewState={setNewState}
        setIsModalOpenAtualizar={setIsModalOpenAtualizar} 
        isModalOpenAtualizar={isModalOpenAtualizar}/>
      <Container onClick={showModalAtualizar}>
          <h4>{title}</h4>
          <small>{status}</small>
      </Container>
    </>
  )
};

export default Card;