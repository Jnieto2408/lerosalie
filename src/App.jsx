import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Preguntas from './components/Preguntas/Preguntas';
import Contacto from './components/Contacto/Contacto';
import NuestrasRosas from './components/NuestrasRosas/NuestrasRosas';


const App = () => {
  return (
    <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<ItemListContainer description="Item #1" />}/>
          <Route path="/rosas" element={<NuestrasRosas/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/q&a" element={<Preguntas/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
