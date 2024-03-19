import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <img alt='no imagfe'
        src={require('./image.jpg')} />
      <Calculator />
    </div>
  );
}

export default App;
