import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Preguntas from './components/Preguntas/Preguntas';
import Contacto from './components/Contacto/Contacto';
import NuestrasRosas from './components/NuestrasRosas/NuestrasRosas';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
  return (
    <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/rosas" element={<NuestrasRosas/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/q&a" element={<Preguntas/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="*" element={ <Navigate to={"/"}/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
