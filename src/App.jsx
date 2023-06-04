import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navigation from './components/Navbar/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <ItemListContainer description="Item #1"/>
    </>
  )
}

export default App
