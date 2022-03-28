import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Calendario from './Pages/Calendario';
import Contacto from './Pages/Contacto';
import Cursos from './Pages/Cursos';
import Index from './Pages/Index';
import Masajes from './Pages/Masajes';
import SobreMi from './Pages/SobreMi';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Index/>}/>
      <Route exact path='/about' element={<SobreMi/>}/>
      <Route exact path='/cursos' element={<Cursos/>}/>
      <Route exact path='/calendario' element={<Calendario/>}/>
      <Route exact path='/masajes' element={<Masajes/>}/>
      <Route exact path='/contacto' element={<Contacto/>}/>

    </Routes>

    </Router>
  );
}

export default App;
