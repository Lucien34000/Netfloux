import './App.css';
// import Movies from './components/Movies';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Netfloux </h1>
      </header>
      <div className="content">
        <Register />
        {/* <Movies /> */}
      </div>
    </div>
  );
}

export default App;
