import { Container, Header, NavBar, Main, MainBtn } from "./styles";
import Card from "../../components/Card";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import ModalCadastrar from "../../components/Modal_Cadastrar";
import api from "../../services/api";

const Dashboard = () => {

  let navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newState, setNewState] = useState(false)
  const [techs, setTechs] = useState([]);
  const [user] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")) || "");
  const token = localStorage.getItem("@KenzieHub:token");

  useEffect(() => {
    api.get(`/users/${user.id}`)
      .then((response) => {
        setTechs(response.data.techs)
      })
  }, [isModalOpen, newState])

  useEffect(() => {
    if (!token) {
      navigate("/")
    }
  })

  const clearStorage = () => {
    window.localStorage.clear()
    navigate("/")
  }
  
  const showModalCadastrar = () => {
    setIsModalOpen(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3}}
    >
      {isModalOpen && <ModalCadastrar setIsModalOpen={setIsModalOpen}/>}
      <Container>
        <NavBar>
          <div>
            <h3>Kenzie Hub</h3>
            <button onClick={clearStorage}>Sair</button>
          </div>
        </NavBar>
        <Header>
          <div>
            <h3>Olá, {user.name}</h3>
            <small>{user.course_module}</small>
          </div>
        </Header>
        <Main>
          <div className="main-header">
            <h4>Tecnologias</h4>
            <MainBtn onClick={showModalCadastrar}>+</MainBtn>
          </div>
          <div className="main-field">
            {techs.map((tech) => {
              return(
                <Card
                  newState={newState}
                  setNewState={setNewState}
                  key={tech.id}
                  id={tech.id} 
                  title={tech.title} 
                  status={tech.status}
                />
              )}
            )}
          </div>
        </Main>
      </Container>
    </motion.div>
  );
}

export default Dashboard;