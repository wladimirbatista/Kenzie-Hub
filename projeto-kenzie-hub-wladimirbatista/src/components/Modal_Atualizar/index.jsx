import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Container, ContainerModal, HeaderModal, FormModal, SelectContainer, CloseBtn, BtnSalvar, BtnExcluir, InputDisable, BtnsContainer } from "./styles";
import Select from "../Select";
import api from '../../services/api';

const ModalAtualizar = ({id, title, setIsModalOpenAtualizar, isModalOpenAtualizar, newState, setNewState}) => {

  const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub:token")) || "");

  const formSchema = yup.object().shape({
    status: yup.string().required("Escolha uma das opções!")
  })
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  })

  const options = ["Iniciante", "Intermediário", "Avançado"];

  const onSubmit = (userData) => {
    api.put(`/users/techs/${id}`, userData, {headers: {Authorization: `Bearer ${token}`}})
      .then(() => {
        setNewState(!newState)
        setIsModalOpenAtualizar(false)
        toast.success('Item atualizado com sucesso!')
      })
      .catch(err => {
        toast.error('Error ao atualizar!')
      })
  }

  const deleteTechs = () => {
    api.delete(`/users/techs/${id}`, {headers: {Authorization: `Bearer ${token}`}})
      .then(() => {
        setNewState(!newState)
        setIsModalOpenAtualizar(false)
        toast.success('Item deletado com sucesso!')
      })
      .catch(err => {
        toast.error('Error ao deletar!')
      }) 
  }

  const closeModal = () => {
    setIsModalOpenAtualizar(false)
  }

  return(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2}}
    >
      <Container modal={isModalOpenAtualizar}>
        <ContainerModal>
          <HeaderModal>
            <h4>Tecnologia Detalhes</h4>
            <CloseBtn onClick={closeModal}>x</CloseBtn>
          </HeaderModal>
          <FormModal onSubmit={handleSubmit(onSubmit)}>
            <p>Nome do projeto</p>
            <InputDisable>{title}</InputDisable>
            <SelectContainer>
              <Select 
                label="Selecionar status"
                register={register}
                name="status"
                options={options}
                error={errors.status?.message}
              />
            </SelectContainer>
            <BtnsContainer>
              <BtnSalvar type='submit'>Salvar alterações</BtnSalvar>
              <BtnExcluir type='button' onClick={deleteTechs}>Excluir</BtnExcluir>
            </BtnsContainer>
          </FormModal>
        </ContainerModal>
      </Container>
    </motion.div>
  );
}

export default ModalAtualizar;