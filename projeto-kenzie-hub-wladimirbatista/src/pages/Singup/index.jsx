import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, FormContainer, HeaderContainer, SelectContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { motion } from 'framer-motion'
import { toast } from "react-toastify";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import api from "../../services/api";

const Singup = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("@KenzieHub:token");
  
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório!"),
    email: yup.string().email("E-mail Inválido!").required("E-mail é obrigatório!"),
    password: yup.string().min(6, "Mínimo de 6 caracteres").required("Senha é obrigatório!"),
    confirmPassword: yup.string().required("Senha é obrigatório!").oneOf([yup.ref("password")], "Digite a senha corretamente!"),
    bio: yup.string().required("Bio é obrigátorio").min(10, "Mínimo de 15 caracteres"),
    contact: yup.string().required("Contato é obrigatório!"),
    course_module: yup.string().required("Módulo é obrigatorio!")
  });
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  });

  const options = [
    "Primeiro módulo (Introdução ao Frontend)",
    "Segundo módulo (Frontend Avançado)",
    "Terceiro módulo (Introdução ao Backend)",
    "Quarto módulo (Backend Avançado)"
  ];

  const onSubmit = ({name, email, password, bio, contact, course_module}) => {
    const user = { name, email, password, bio, contact, course_module };
    api.post("/users", user)
      .then(response => {
        toast.success('Conta criada com sucesso!');
        return navigate("/");
      })
      .catch(err => 
        toast.error('E-mail já cadastrado! Tente outro email!'));
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard")
    }
  })

  const returnLoginPage = () => {
    navigate("/")
  };

  return(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3}}
    >
      <Container>
        <HeaderContainer>
          <h2>Kenzie Hub</h2>
          <button onClick={returnLoginPage}>Voltar</button>
        </HeaderContainer>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h3>Crie sua conta</h3>
          <small>Rapido e grátis, vamos nessa!!</small>
          <Input 
            label="Nome" 
            type="text" 
            placeholder="Digite aqui seu nome" 
            autoComplete='off' 
            register={register} 
            name="name"
            error={errors.name?.message}
          />
          <Input 
            label="E-mail" 
            type="email" 
            placeholder="Digite aqui seu email" 
            autoComplete='off' 
            register={register} 
            name="email"
            error={errors.email?.message}
          />
          <Input 
            label="Senha" 
            type="password" 
            placeholder="Digite aqui sua senha" 
            autoComplete='off' 
            register={register} 
            name="password"
            error={errors.password?.message}
          />
          <Input 
            label="Confirmar Senha" 
            type="password" 
            placeholder="Digite novamente sua senha" 
            autoComplete='off' 
            register={register} 
            name="confirmPassword"
            error={errors.confirmPassword?.message}
          />
          <Input 
            label="Descrição" 
            type="text" 
            placeholder="Descreva a stack" 
            autoComplete='off' 
            register={register} 
            name="bio"
            error={errors.bio?.message}
          />
          <Input 
            label="Contato" 
            type="text" 
            placeholder="Contato" 
            autoComplete='off' 
            register={register} 
            name="contact"
            error={errors.contact?.message}
          />
          <SelectContainer>
            <Select
              label="Selecionar módulo"
              register={register}
              name='course_module'
              options={options}
              error={errors.course_module?.message}
            />         
          </SelectContainer>
          <Button type="submit" primarySchema>Cadastrar</Button>
        </FormContainer>
      </Container>
    </motion.div>
  )
};

export default Singup;