import * as yup from 'yup';
import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContainerOverlay, ContainerModal, HeaderModal, FormModal, SelectContainer } from "./styles";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import api from '../../services/api'

const ModalCadastrar = ({setIsModalOpen}) => {

  const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub:token")) || "");

  const formSchema = yup.object().shape({
    title: yup.string().required("Digite o nome da tech."),
    status: yup.string().required("Escolha uma das opções!")
  })

  const options = ["Iniciante", "Intermediário", "Avançado"];

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmit = (userData) => {
    api.post("/users/techs", userData, {headers: {Authorization: `Bearer ${token}`}})
      .then((_) => {
        setIsModalOpen(false)
        toast.success("Tecnologia cadastrada!")
      })
      .catch(err => {
        toast.error('Tecnlogia já foi cadastrada!')
      }) 
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2}}
    >
      <ContainerOverlay>
        <ContainerModal>
          <HeaderModal>
            <h4>Cadastrar Tecnologia</h4>
            <button onClick={closeModal}>x</button>
          </HeaderModal>
          <FormModal onSubmit={handleSubmit(onSubmit)}>
            <Input 
              label="Nome" 
              type="text"
              register={register} 
              name="title"
              placeholder="Digite a tecnologia a ser cadastrada" 
              autoComplete='off' 
              error={errors.title?.message}
            />
            <SelectContainer>
              <Select 
                label="Selecionar status"
                register={register}
                name="status"
                options={options}
                error={errors.status?.message}
              />
            </SelectContainer>
            <Button type="submit" primarySchema>Cadastrar Tecnologia</Button>
          </FormModal>
        </ContainerModal>
      </ContainerOverlay>
    </motion.div>
  );
}

export default ModalCadastrar;