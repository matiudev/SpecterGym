import './App.css';
import Presentacion from './components/Presentacion';
import FormReserve from './components/FormReserve';
import Characteristics from './components/Characteristics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Presentacion/>
      <Characteristics/>
      <FormReserve/>
      <Footer/>
    </div>
  );
}

export default App;
