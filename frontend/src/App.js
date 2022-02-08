
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen.js';
import VotingScreen from './screens/VotingScreen.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/vote" element={<VotingScreen/>}/>
        </Routes>
      </BrowserRouter>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
