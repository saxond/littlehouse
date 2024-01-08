import './App.css';
import littlehouse from './littlehouse.jpg'

function App() {
  return (
    <div className="App">
      <img src={littlehouse} alt="LittleHouse" style={{'max-height': '1200px', 'max-width': '1200px;'}} />
    </div>
  );
}

export default App;
