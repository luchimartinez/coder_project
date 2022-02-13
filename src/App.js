import './App.css';
import Navbar from './components/Navbar/Navbar';
import Catalogue from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Catalogue/>
    </div>
  );
}

export default App;
