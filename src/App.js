import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/* import {BrowserRouter, Routes, Route} from 'react-router-dom' */
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {useState} from 'react'

function App() {

  const [route, setRoute] = useState({
    path: 'list',
    id: 1
  })


  return (
    <div className="App">
      <Navbar routing={setRoute}/>
      {route.path === 'list' && <ItemListContainer routing={setRoute}/>}
      {route.path === 'detail' && <ItemDetailContainer id={route.id}/>}
    </div>
  );
}

export default App;
