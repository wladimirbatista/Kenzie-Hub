import * as yup from 'yup';
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'
import Button from "../../components/Button";
import Input from "../../components/Input";
import api from '../../services/api';

const Login = () => {

  const navigate = useNavigate()

  const token = localStorage.getItem("@KenzieHub:token");

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail Inválido!")
      .required("E-mail é obrigatorio!"),
    password: yup
      .string()
      .required("Senha é obrigatorio!")
      .min(6, "Mínimo 6 caracteres")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmit = (data) => {
    api.post("/sessions", data).then(response => {

      const { token, user } = response.data;

      localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
      localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

      toast.success('Login realizado com sucesso!');

      navigate("/dashboard");
    })
    .catch(err => 
      toast.error('E-mail ou senha inválidos!'));
  }

  useEffect(() => {
    if (token) {
      navigate("/dashboard")
    }
  })

  const onSingup = () => {
    navigate("/singup")
  }

  return(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3}}
    >
      <Container>
        <div>
          <h1>Kenzie Hub</h1>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <Input 
            label="E-mail" 
            type="email" 
            placeholder="Digite seu e-mail"
            register={register}
            name="email"
            error={errors.email?.message}  
            />
          <Input 
            label="Senha" 
            type="password" 
            placeholder="Digite a sua senha"
            register={register}
            name="password"
            error={errors.password?.message}  
            />
          <Button type="submit" primarySchema>Entrar</Button>
          <small>Ainda não possui uma conta?</small>
          <Button onClick={onSingup}>Cadastre-se</Button>
        </form>
      </Container>
    </motion.div>
  )
}

export default Login;