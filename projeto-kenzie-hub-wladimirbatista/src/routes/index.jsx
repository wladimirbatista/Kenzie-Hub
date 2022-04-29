import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import Dashboard from '../pages/Dashboard';
import Singup from '../pages/Singup';
import Login from '../pages/Login'

function Rotas() {

  // const [authenticated, setAuthenticated] = useState(false);

  // console.log(authenticated)

  // useEffect(() => {
  //   if (authenticated) {
  //     return setAuthenticated(true);
  //   }
  // }, [authenticated])

  return(
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/singup" element={<Singup />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </AnimatePresence>
  );
}

export default Rotas;