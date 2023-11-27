//import logo from './logo.svg';
import "./App.css";
import LoginForm from "./views/Login";
import LoginForm2 from "./views/Login2";
import LoginForm3 from "./views/Login3";
//import Home from './views/Home';
//import Dashboard from './views/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm3 />
        <LoginForm />
        <LoginForm2 />
      </header>
    </div>
  );
}

export default App;
