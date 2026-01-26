import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './componentes/NavBar'
import Introducao from './componentes/Introducao'
import Sobre from './componentes/Sobre'
import Projetos from './componentes/Projetos'
import Skills from './componentes/Skills'
import Contato from './componentes/Contato'
import Obrigado from "./componentes/Obrigado.jsx";

function App() {
  return (
    <Router>
      <div className='relative w-full h-full overflow-hidden '>

         

        <NavBar />

        <Routes>
          <Route path="/" element={
            <>
              <Introducao />
              <Sobre />
              <Projetos />
              <Skills />
              <Contato />
            </>
          } />

          <Route path="/obrigado" element={<Obrigado />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
